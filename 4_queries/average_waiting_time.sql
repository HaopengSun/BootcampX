SELECT avg(assistance_requests.started_at - assistance_requests.created_at)
FROM assistance_requests;