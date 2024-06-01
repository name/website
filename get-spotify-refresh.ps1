# Parameters
$client_id = "REPLACE_WITH_YOUR_CLIENT_ID"
$client_secret = "REPLACE_WITH_YOUR_CLIENT_SECRET"
$redirect_uri = "https://lennyomg.github.io/Spotify-PowerShell/index.html"
$scope = "user-read-currently-playing user-modify-playback-state"

# Step 1: Get Authorization Code
$url = "https://accounts.spotify.com/authorize?client_id=$client_id&response_type=code&redirect_uri=$redirect_uri&scope=$scope"
Start-Process $url
Write-Host "Please authorize the application and enter the code from the redirect URL:"
$auth_code = Read-Host "Authorization Code"

# Step 2: Exchange Authorization Code for Access and Refresh Tokens
$tokenResponse = Invoke-RestMethod -Uri "https://accounts.spotify.com/api/token" -Method Post -Headers @{
    "Authorization" = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${client_id}:${client_secret}"))
} -Body @{
    grant_type = "authorization_code"
    code = $auth_code
    redirect_uri = $redirect_uri
} -ContentType "application/x-www-form-urlencoded"

$access_token = $tokenResponse.access_token
$refresh_token = $tokenResponse.refresh_token

Write-Host "Access Token: $access_token"
Write-Host "Refresh Token: $refresh_token"

# Step 3: Refresh Access Token
$refreshResponse = Invoke-RestMethod -Uri "https://accounts.spotify.com/api/token" -Method Post -Headers @{
    "Authorization" = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${client_id}:${client_secret}"))
} -Body @{
    grant_type = "refresh_token"
    refresh_token = $refresh_token
} -ContentType "application/x-www-form-urlencoded"

$new_access_token = $refreshResponse.access_token
Write-Host "New Access Token: $new_access_token"
