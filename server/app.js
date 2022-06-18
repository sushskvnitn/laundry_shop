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
            <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
		<tbody><tr>
			<td align="center">
				<table class="col-500" width="500" border="0" align="center" cellpadding="0" cellspacing="0">
					<tbody><tr>
						<td align="center" valign="top" background="https://media.istockphoto.com/photos/abstract-blue-cyan-background-picture-id995719694?k=20&m=995719694&s=612x612&w=0&h=zI2SFqWdZallvqgVphnq5T8ZWYK0TBIkKdyYP60JAI8=" bgcolor="#1f4b73" style=" background-position:top;height="100"">
							<table class="col-600" width="600" height="400" border="0" align="center" cellpadding="0" cellspacing="0">

								<tbody>
								<tr>
									<td align="center" style="font-family: 'Raleway', sans-serif; font-size:42px; color:#000000; line-height:60px; font-weight: bold; letter-spacing: 7px;">
						Laundry Me  
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px; border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody>
					<tr>
						<td align="center" style="font-family: 'Raleway', sans-serif; font-size:22px; font-weight: bold; color:#2a3a4b;">You have a new laundry customer from laundry me-Laundry booking micro services</td>
					</tr>
					<tr>
						<td align="center" style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">
							Laundry me-Laundry booking micro services
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>

		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9; ">
					<tbody><tr>
						<td height="10"></td>
					</tr>
					<tr>
						<td>


							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;padding-top:35px" src="https://designmodo.com/demo/emailtemplate/images/icon-about.png" width="69" height="78" alt="icon">
												</td>
											</tr>
											<tr>
												<td height="15"></td>
											</tr>
											<tr align="center">
												<td style="font-family: 'Raleway', Arial, sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">About Us</td>
											</tr>
											<tr>
												<td height="10"></td>
											</tr>
											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">we will provide you a premium services and we connect you easily</td>
											</tr>
										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>
							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>
							<table class="col3" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-team.png" width="69" height="78" alt="icon">
												</td>
											</tr>
											<tr>
												<td height="15"></td>
											</tr>
											<tr align="center">
												<td style="font-family: 'Raleway', sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Team</td>
											</tr>
											<tr>
												<td height="10"></td>
											</tr>
											<tr align="center">
													<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">We are a team of dedicated and dedicated people who are dedicated to providing you the best services</td>
											</tr>
										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>
							<table width="1" height="20" border="0" cellpadding="0" cellspacing="0" align="left">
								<tbody><tr>
									<td height="20" style="font-size: 0;line-height: 0;border-collapse: collapse;">
										<p style="padding-left: 24px;">&nbsp;</p>
									</td>
								</tr>
							</tbody></table>
							<table class="col3" width="183" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td height="30"></td>
								</tr>
								<tr>
									<td align="center">
										<table class="insider" width="133" border="0" align="center" cellpadding="0" cellspacing="0">

											<tbody><tr align="center" style="line-height:0px;">
												<td>
													<img style="display:block; line-height:0px; font-size:0px; border:0px;" src="https://designmodo.com/demo/emailtemplate/images/icon-portfolio.png" width="69" height="78" alt="icon">
												</td>
											</tr>
											<tr align="center">
												<td style="font-family: 'Raleway',  sans-serif; font-size:20px; color:#2b3c4d; line-height:24px; font-weight: bold;">Our Website</td>
											</tr>
											<tr>
												<td height="10"></td>
											</tr>
											<tr align="center">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#757575; line-height:24px; font-weight: 300;">This is a laundary app which will help you to book your nearby laundry</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="30"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
			<tr>
					<td height="5"></td>
		</tr>
		<tr>
			<td align="center">
				<table align="center" class="col-600" width="600" border="0" cellspacing="0" cellpadding="0">
					<tbody><tr>
						<td align="center" bgcolor="#2a3b4c">
							<table class="col-600" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
								<tbody>
								<tr>
									<td>
										<table class="col1" width="183" border="0" align="left" cellpadding="0" cellspacing="0">
											<tbody>
											<tr>
												<td align="center">
													<img style="display:block; line-height:0px; font-size:0px; border:0px; padding-top:60px" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-title.png" alt="img" width="156" height="200">
												</td>
											</tr>
										</tbody></table>

										<table class="col3_one" width="380" border="0" align="right" cellpadding="0" cellspacing="0">
	<tbody><tr align="left" valign="top">
												
											</tr>


											<tr align="left" valign="top">
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#fff; line-height:24px; font-weight: 300;">
                          <h1>Details:</h1>
												 <h2>customer name : ${req.body.name}</h2>
                <h2>customer Email: ${req.body.email}</h2>
                <h2>customer Address: ${req.body.address}</h2>
                <h2>customer Phone number : ${req.body.phone}</h2>
                <h2>customer preferred Date: ${req.body.date}</h2>
                <h2>customer preferred  Time: ${req.body.time}</h2>
												</td>
											</tr>

										</tbody></table>
									</td>
								</tr>
								<tr>
									<td height="33"></td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
		<tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="margin-left:20px; margin-right:20px;">
		<tbody><tr>
			<td align="center">
				<table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0" style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
					<tbody><tr>
						<td height="50"></td>
					</tr>
					<tr>
						<td align="right">
							<table class="col2" width="287" border="0" align="right" cellpadding="0" cellspacing="0">
								<tbody><tr>
									<td align="center" style="line-height:0px;">
										<img style="display:block; line-height:0px; font-size:0px; border:0px;" class="images_style" src="https://designmodo.com/demo/emailtemplate/images/icon-responsive.png" width="169" height="138">
									</td>
								</tr>
							</tbody></table>
							<table width="287" border="0" align="left" cellpadding="0" cellspacing="0" class="col2" style="">
								<tbody><tr>
									<td align="center">
										<table class="insider" width="237" border="0" align="center" cellpadding="0" cellspacing="0">
											<tbody><tr align="left">
												<td style="font-family: 'Raleway', sans-serif; font-size:23px; color:#2a3b4c; line-height:30px; font-weight: bold;">What we do?</td>
											</tr>

											<tr>
												<td height="5"></td>
											</tr>


											<tr>
												<td style="font-family: 'Lato', sans-serif; font-size:14px; color:#7f8c8d; line-height:24px; font-weight: 300;">
													We help you to book your nearby laundry
for you to use it. We can do both in this app, that is we can book laundary or place your
shop location here and register it with free of cost.
												</td>
											</tr>
										</tbody></table>
									</td>
								</tr>
							</tbody></table>
						</td>
					</tr>
				</tbody></table>
			</td>
		</tr>
		
				</tbody></table>
			</td>
		</tr>
				</tbody></table>
            `,
        }).then(res.send("mail")).catch(console.log);
});
app.listen(PORT, (req, res) => {
      console.log('listening on port 5000');
});