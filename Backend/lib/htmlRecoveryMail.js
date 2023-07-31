const htmlRecoveryMail = ({ userName, secureCode, supportMail, linkResetPassword }) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    /* Aquí puedes agregar tus estilos personalizados */
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .email-wrapper {
      width: 100%;
      margin: 0 auto;
      background-color: #f4f4f4;
    }
    .email-content {
      max-width: 570px;
      margin: 0 auto;
      padding: 20px;
    }
    .email-masthead {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    .email-body {
      background-color: #fff;
      padding: 20px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
    .button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center">
        <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td class="email-masthead">
              <h1>SYSTEM DASHBOARD</h1>
            </td>
          </tr>
          <tr>
            <td class="email-body" width="570" cellpadding="0" cellspacing="0">
              <table class="email-body-inner" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="content-cell">
                    <h2>Hi ${userName},</h2>
                    <p>You recently requested to reset your password for your Intranet account. Use the button below to reset it.</p>
                    <div align="center"><h2>Your Secure Code is:</h2></div>
                    <h1 align="center">${secureCode}</h1>
                    <p align="center"><strong>This password reset is only valid for the next 24 hours.</strong></p>
                    <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td align="center">
                          <a href="${linkResetPassword}" class="button" target="_blank">Reset your password</a>
                        </td>
                      </tr>
                    </table>
                    <p>If you did not request a password reset, please ignore this email or <a href="mailto:${supportMail}">contact support</a> if you have questions.</p>
                    <p align="center">Thanks,<br>Support Team</p>
                    <table class="body-sub" role="presentation">
                      <tr>
                        <td>
                          <p class="sub">If you’re having trouble with the button above, copy and paste the URL below into your web browser.</p>
                          <p class="sub" align="center">${linkResetPassword}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="content-cell" align="center">
                    <p class="sub align-center">SYSTEM DASHBOARD<br>Santiago, Chile</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

export { htmlRecoveryMail };
