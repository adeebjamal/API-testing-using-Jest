## 1xx (Informational):
* `100 Continue`: The server has received the initial part of the request, and it should continue to process the request.

## 2xx (Successful):
* `200 OK`: The request has been successfully received, understood, and accepted.
* `201 Created`: The request has been fulfilled, and a new resource has been created.
* `204 No Content`: The server successfully processed the request, but there is no content to return.

## 3xx (Redirection):
* `301 Moved Permanently`: The requested resource has been permanently moved to a new URL.
* `302 Found (or Temporary Redirect)`: The requested resource has been temporarily moved to a different URL.
* `304 Not Modified`: The client's cached copy of the resource is still valid, and the server has not modified the resource.

## 4xx (Client Errors):
* `400 Bad Request`: The server could not understand the request due to invalid syntax.
* `401 Unauthorized`: Authentication is required, and the user is not authenticated.
* `403 Forbidden`: The server understood the request but refuses to fulfill it.
* `404 Not Found`: The requested resource could not be found on the server.
* `405 Method Not Allowed`: The HTTP method used in the request is not allowed for the requested resource.
* `422 Unprocessable Entity`: The request was well-formed but was unable to be followed due to semantic errors.
* `429 Too Many Requests`: The user has sent too many requests in a given amount of time.

## 5xx (Server Errors):
* `500 Internal Server Error`: A generic error message indicating that something has gone wrong on the server.
* `502 Bad Gateway`: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
* `503 Service Unavailable`: The server is currently unable to handle the request due to temporary overloading or maintenance.
* `504 Gateway Timeout`: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.