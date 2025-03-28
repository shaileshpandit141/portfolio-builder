# PBuilder - Portfolio Builder Web Application 

This project is a portfolio builder web application using Django for the backend with JWT (JSON Web Token) authentication, and React with TypeScript for the frontend.

## Features

- Django backend with custom user model (using email authentication)
- JWT Authentication for all actions
- React with TypeScript frontend setup with Create React App
- Integration between Django and React
- Portfolio creation and management functionality
- Customizable portfolio templates and sections

## Requirements

- Python 3.8+
- Node.js 14+
- npm
- PostgreSQL (default: db.sqlite3)

## Setup Instructions

### Backend Setup (Django)

1. **Clone the repository:**

  ```bash
  git clone https://github.com/shaileshpandit141/portfolio-builder.git
  cd portfolio-builder
  ```

2. **Create a virtual environment:**

  ```bash
  python3 -m venv .venv
  source venv/bin/activate
  ```

3. **Install dependencies:**

  ```bash
  pip install -r requirements.txt
  ```

4. **Set up environment variables:**

  Create a `.env` file in the root directory and add the following:

  ```python
  # SECRET_KEY Configuration Settings
  # ---------------------------------
  SECRET_KEY=Django_key

  # Server Configuration Settings
  # -----------------------------
  HOST=localhost
  PORT=8000

  # DJANGO_ENV mode as development, or production
  # ---------------------------------------------
  DJANGO_ENV=development
  # DJANGO_ENV=production

  # FRONTEND_URL Configuration Settings
  # -----------------------------------
  FRONTEND_URL=http://localhost:3000

  # Access Control Configuration Settings, (Only for production)
  # ------------------------------------------------------------
  # ALLOWED_HOSTS=localhost,127.0.0.1,192.168.0.116
  # CORS_ALLOWED_ORIGINS=http://localhost:8000,http://127.0.0.1:8000,http://192.168.0.116:8000

  # PostgreSQL DB Configuration Settings, (Only for production)
  # -----------------------------------------------------------
  DB_NAME=postgres
  DB_USER=postgres
  DB_PASSWORD=postgres
  DB_HOST=localhost
  DB_PORT=5432

  # Redis configuration Settings, (Only for production)
  # ---------------------------------------------------
  REDIS_CACHE_LOCATION=redis://127.0.0.1:6379/1

  # Email Configuration Settings, (Only for production)
  # ---------------------------------------------------
  EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
  EMAIL_HOST=smtp.gmail.com
  EMAIL_PORT=587
  EMAIL_USE_TLS=True
  EMAIL_USE_SSL=False
  EMAIL_HOST_USER=email_host_user@gmail.com
  EMAIL_HOST_PASSWORD=email_host_password
  DEFAULT_FROM_EMAIL=default_from_email

  # Google OAuth2 Configuration Settings
  # ------------------------------------
  GOOGLE_CLIENT_ID=Google_Client_id
  GOOGLE_CLIENT_SECRET=Google_Client_Secret
  GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback
  ```

5. **Apply migrations:**

  ```bash
  python manage.py migrate
  ```

6. **Create a superuser:**

  ```bash
  python manage.py createsuperuser
  ```

7. **Run the development server:**

  ```bash
  python manage.py runserver
  ```

### Frontend Setup (React with TypeScript)

1. **Navigate to the frontend directory:**

  ```bash
  cd frontend
  ```

2. **Install dependencies:**

  ```bash
  npm install
  ```

3. **Set up environment variables:**

  Create a `.env` file in the root directory and add the following:

  ```python
  # Server Configuration Settings
  # -----------------------------
  HOST=192.168.0.145
  PORT=3000

  # Base API URL endpoint Configuration Settings
  # --------------------------------------------
  REACT_APP_BASE_API_URL=http://192.168.0.145:8000

  # Google Client Id Configuration Settings
  # ---------------------------------------
  REACT_APP_GOOGLE_CLIENT_ID=Google_Client_Id

  # Base Media URL Configuration Settings
  # -------------------------------------
  REACT_APP_BASE_MEDIA_URL=http://192.168.0.145:8000
  ```
  Note: `HOST` name is same as backend `HOST` name.

5. **Run the React development server:**

  ```bash
  npm start
  ```

  ### Performing Authentication Actions API's

  **Base URL:** http://localhost:8000/api/v1/auth

  | Action                            | HTTP Method | Endpoint                      | Description                                                                                                                                   |
  | --------------------------------- | ----------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
  | Registration                      | POST        | /signup/                      | Submit user registration details including email, password, and other information. A verification email is sent upon successful registration. |
  | Login                             | POST        | /signin/token/                | Authenticate using email and password to receive access and refresh JWT tokens for secured operations.                                        |
  | Token Refresh                     | POST        | /signin/token/refresh/        | Use a valid refresh token to obtain a new access token, eliminating the need to log in again.                                                 |
  | Logout                            | POST        | /signout/                     | Invalidate the refresh token to log out securely and prevent further token refresh operations.                                                |
  | Account Verification              | POST        | /verify-user-account/         | Submit the verification token to validate the user's email address and activate the account.                                                  |
  | Account Verification Confirmation | POST        | /verify-user-account/confirm/ | Confirm account verification by providing the token received via email.                                                                       |
  | Change Password                   | POST        | /change-password/             | Allow authenticated users to update their password by providing the current password along with the new password for confirmation.            |
  | Forgot Password                   | POST        | /forgot-password/             | Initiate the password reset process by submitting the registered email address to receive a reset link.                                       |
  | Forgot Password Confirmation      | POST        | /forgot-password/confirm/     | Confirm the password reset by validating the provided token and setting a new password.                                                       |
  | Deactivate Account                | POST        | /deactivate-account/          | Deactivate the user's account to restrict access until reactivation, enhancing account security.                                              |
  | User Info                         | GET         | /user/                        | Retrieve detailed profile information of the currently authenticated user including email, name, and other personal details.                  |
  | Google Sign In                    | GET         | /google/signin/               | Returns the redirect URL needed to handle the Google sign-in process.                                                                         |
  | Google Callback                   | POST        | /google/callback/             | Process the data returned from Google after authentication and generate JWT tokens accordingly.                                               |

**`Note:`**
## **Django, DRF, and others Error Response Summary Table**

| HTTP Status Code           | Default Response Structure                                         |
| -------------------------- | ------------------------------------------------------------------ |
| **400 Bad Request**        | { "field_name": ["Error message"] }                                |
| **401 Unauthorized**       | { "detail": "Authentication credentials were not provided." }      |
| **403 Forbidden**          | { "detail": "You do not have permission to perform this action." } |
| **404 Not Found**          | { "detail": "Not found." }                                         |
| **405 Method Not Allowed** | { "detail": "Method 'POST' not allowed." }                         |
| **500 Server Error**       | { "detail": "A server error occurred." }                           |


## API's Test using .rest VSCode File Extenction:

**Register a new user:**
```python
POST http://localhost:8000/api/v1/auth/signup/
Content-Type: application/json

{
  "email": "email@example.com",
  "password1": "Email#12345@",
  "password2": "Email#12345@"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "Verification e-mail sent.",
  "data": {
    "detail": "Request was successful."
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

Error response:
```json
{
  "status": "failed",
  "status_code": 400,
  "message": "The request was not successful",
  "data": null,
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```
**Note:** Errors key contains default Django Errors response structure details.

**Login to get JWT tokens:**
```python
POST http://localhost:8000/api/v1/auth/token/
Content-Type: application/json

{
  "email": "email@example.com",
  "password": "Email#12345@"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "The request was successful",
  "data": {
    "access_token": "jwt_access_token",
    "refresh_token": "jwt_refresh_token"
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

Error response:
```json
{
  "status": "failed",
  "status_code": 400,
  "message": "The request was not successful",
  "data": null,
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```
**Note:** Errors key contains default Django Errors response structure details.

**Logout (Blacklist the refresh token):**
```python
POST http://localhost:8000/api/v1/auth/logout/
Content-Type: application/json
Authorization: Bearer jwt_access_token

{
  "refresh_token": "jwt_refresh_token"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "You have signed out successfully.",
  "data": {
    "detail": "Refresh token request was successfull"
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Request password reset:**
```python
POST http://localhost:8000/api/v1/auth/password/reset/
Content-Type: application/json

{
  "email": "user@example.com"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "Password reset e-mail has been sent.",
  "data": {
    "detail": "Password reset link has been send to your email."
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Confirm password reset:**
```python
POST http://localhost:8000/api/v1/auth/password/reset/confirm/
Content-Type: application/json

{
  "uid": "uid_from_email",
  "token": "token_from_email", 
  "new_password1": "new_strong_password123",
  "new_password2": "new_strong_password123"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "Password has been reset with the new password.",
  "data": {
    "detail": "Your password reset successful."
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Verify email:**
```python
POST http://localhost:8000/api/v1/auth/signup/verify-email/
Content-Type: application/json

{
  "token": "verification_token"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "Account already verified",
  "data": {
    "detail": "Account verification email was successful"
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Resend Verification Email:**
```python
POST http://localhost:8000/api/v1/auth/signup/resend-email-verification/
Authorization: Bearer <your_jwt_token>
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "Verification e-mail sent",
  "data": {
    "detail": "Reset Account Verification link has been send to your email."
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Refresh JWT tokens:**
```python
POST http://localhost:8000/api/v1/auth/token/refresh/
Content-Type: application/json

{
  "refresh_token": "jwt_refresh_token"
}
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "The request was successful",
  "data": {
    "access_token": "new_jwt_access_token"
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Access the current user:**
```python
GET http://localhost:8000/api/v1/auth/user/
Authorization: Bearer jwt_access_token
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "The request was successful",
  "data": {
    "id": 1,
    "email": "email@example.com",
    "first_name": "first_name",
    "last_name": "last_name"
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Access a protected endpoint:**
```python
GET http://localhost:8000/api/v1/auth/protected/
Authorization: Bearer jwt_access_token
```

Success response:
```json
{
  "status": "succeeded",
  "status_code": 200,
  "message": "The request was successful",
  "data": {
    "detail": "This is a protected view"
  },
  "errors": {},
  "meta": {
    "request_id": "715cb8bf-b8ae-4dc7-85d0-fed7dd735f5c",
    "timestamp": "2025-02-26T09:49:34.288704",
    "response_time": "0.00717 seconds",
    "documentation_url": "N/A",
    "rate_limits": {
      "throttled_by": null,
      "throttles": {
        "user": {
          "limit": 1000,
          "remaining": 999,
          "reset_time": "2025-03-14T12:50:32.350781+00:00",
          "retry_after": "86399 seconds"
        }
      }
  }
  }
}
```

**Frontend:**

The React frontend should handle authentication by storing the JWT tokens in localStorage or a similar mechanism and including the access token in the Authorization header for protected requests. TypeScript interfaces should be used for type checking of API responses and request payloads.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Author
If you have any questions or need assistance with this project, please contact `Shailesh` at `shaileshpandit141@gmail.com`.

Thank you
