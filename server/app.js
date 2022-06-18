const express = require("express");
// const path = require('path');
const dotenv =require("dotenv");
// const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
// const cors = require("cors");
// app.use(cors());
// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.static(buildPath));

const Sib = require('sib-api-v3-sdk');


const PORT = process.env.PORT || 5000;
require("./model/userschema");
dotenv.config({path: './config.env'})
require('./db/connection')
app.use(express.json());
app.use(require("./router/auth"));
app.get('/', (req, res) =>{
      res.send('Hello World');
})

    const Client = Sib.ApiClient.instance;
    // Configure API key authorization: api-key
    const apiKey = Client.authentications['api-key'];
    apiKey.apiKey = process.env.PASS;

app.post('/sendmail', (req, res) =>{

       const TranEmailApi =new Sib.TransactionalEmailsApi();
       const sender ={
            email: process.env.EMAIL,
            name: "LaundryMe-Laundry booking micro services "
       }
       const receiver =[{
        email: req.body.to,
       }]
        TranEmailApi.sendTransacEmail({
            sender,
            to: receiver,
            subject : "laundry me-Laundry booking micro services",
            textContent: "Laundry me-Laundry booking micro services",
            htmlContent:`
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
</head>

<body>
    <div class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f7f7f7"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0 " style="background-color:#ffffff">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure" align="left" style="border-radius: 10px 10px 0px 0px; background-color: #4c8aa7;" bgcolor="#4c8aa7">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="600" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                        <table cellpadding="0" cellspacing="0" width="100%" style="border-radius: 1px; border-collapse: separate;">
                                                                            <tbody>
                                                                                <tr class="es-visible-simple-html-only">
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://www.linkpicture.com/q/remlogo_1.png" alt="Logo" style="display: block;" width="110" title="Logo"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-content-body" style="border-left:1px solid #4c8aa7;border-right:1px solid #4c8aa7;background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="558" align="left" class="esd-container-frame">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-m-txt-c es-p20b" style="text-align:center;">
                                                                                        <h1><span style="font-family:helvetica,'helvetica neue',arial,verdana,sans-serif;"><strong>Laundry Me</strong></span><br><span style="font-size:15px;"><b>Laundry booking micro services</b></span></h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="display:flex;justify-content: center;" >
                                                                                    <td align="center" class="esd-block-image es-p15r" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img class="adapt-img" src="https://wowqgf.stripocdn.email/content/guids/6753a994-e0f8-4382-9918-2ffd63898a4f/images/undraw_successful_purchase_re_mpig.png" alt  width="220"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="es-m-p0r esd-container-frame" width="558" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p30t es-p5b es-m-txt-c">
                                                                                        <h1 style="font-size: 21px; font-family: 'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif;"><b>You have a new laundry customer from laundry me-Laundry booking micro services</b></h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p10t es-p20b es-p40r es-p40l" style="text-align:center;">
                                                                                        <p>Details:</p>
                                                                                        <p>customer name : ${req.body.name}</p>
                                                                                        <p>customer Email: ${req.body.email}</p>
                                                                                        <p>customer Address: ${req.body.address}</p>
                                                                                        <p>customer Phone number : ${req.body.phone}</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b es-m-txt-c" style="font-size:0">
                                                                                        <table border="0" width="35%" height="100%" cellpadding="0" cellspacing="0" style="display: inline-table; width: 35% !important;">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #fb8500; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="es-m-p0r esd-container-frame" width="558" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-m-txt-c es-p5t es-p5b">
                                                                                        <p style="font-size: 20px; color: #666666; line-height: 200%;">Prefered Date: <strong>${req.body.date}</strong><br>Prefered&nbsp;Time: <strong>${req.body.time}</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p25t es-p25b es-p20r es-p20l" align="left" style="border-radius: 0px 0px 10px 10px; background-color: #4c8aa7;" bgcolor="#4c8aa7">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-social" style="font-size:0">
                                                                                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img title="Facebook" src="https://wowqgf.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img title="Twitter" src="https://wowqgf.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png" alt="Tw" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img title="Instagram" src="https://wowqgf.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="32"></a></td>
                                                                                                    <td align="center" valign="top"><a target="_blank" href="https://viewstripo.email"><img title="Youtube" src="https://wowqgf.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" width="32"></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
            `,
        }).then(res.send("mail")).catch(console.log);
});
app.listen(PORT, (req, res) => {
      console.log('listening on port 5000');
});