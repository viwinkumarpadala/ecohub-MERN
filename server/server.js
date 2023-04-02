// import required modules
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const uuid = require("node-uuid");
const fs = require("fs");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');    


// All different routes for the application 
const user_router = require("./routes/user_routes"); 
const admin_router = require("./routes/admin_router");
const product_router = require("./routes/product_router");
const message_router = require("./routes/message_router"); 
const mailer_router = require("./routes/mailer_routes");
const article_router = require("./routes/article_router");
const vehicle_router = require("./routes/vehicle_router");
const allvehicle_router = require("./routes/allvehicle_router");
const image_router = require("./routes/image_router");

const accessLogStream = fs.createWriteStream(
	path.join(__dirname, "log/access.log"),
	{
		flags: "a",
	}
);

morgan.token("id", function getId(req) {
	return req.id;
});

// create express app
const app = express();


app.use('/api-docs', swaggerUi.serve);

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'ECOHUB',
			version: '1.0.0',
		},
		servers: [{
			url: ""
		}]
	},
	apis: ['./server.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());

app.use(assignId);
app.use(morgan(":id :method :url :response-time", { stream: accessLogStream }));
function assignId(req, res, next) {
	req.id = uuid.v4();
	next();
}
// set up MongoDB connection
mongoose
	.connect(
		"mongodb+srv://RohithBoppey:RohithBoppey@ecohub.isryz.mongodb.net/ECOHUB",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Could not connect to MongoDB", err));



/**
 * @swagger
 *  components:
 *      schema:
 *          User:
 *            type: object
 *            properties:
 *                fullname:
 *                    type: string
 *                username:
 *                    type: string
 *                email:
 *                    type: string
 *                password:
 *                    type: string
 *                img_url:
 *                    type: string
 *                gender:
 *                    type: string
 *                phone_number:
 *                    type: string
 *                city:
 *                    type: string
 *                address:
 *                    type: string
 *                cart:
 *                    type: array
 * 
 */


/**
 * @swagger
 *  components:
 *      schema:
 *          Admin:
 *            type: object
 *            properties:
 *                username:
 *                    type: string
 *                password:
 *                    type: string
 * 
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          mailerResponse:
 *            type: object
 *            properties:
 *                status:
 *                    type: boolean
 *                message:
 *                    type: string
 * 
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Messageinfo:
 *            type: object
 *            properties:
 *                message:
 *                    type: string
 * 
 */


/**
 * @swagger
 *  components:
 *      schema:
 *          Message:
 *            type: object
 *            properties:
 *                email:
 *                    type: string
 *                type:
 *                    type: string
 *                message:
 *                    type: string
 * 
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Article:
 *            type: object
 *            properties:
 *                title:
 *                    type: string
 *                desc:
 *                    type: string
 *                source:
 *                    type: string
 * 
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Product:
 *            type: object
 *            properties:
 *                name:
 *                    type: string
 *                a_price:
 *                    type: string
 *                d_price:
 *                    type: string
 *                img_link:
 *                    type: string
 * 
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          VehicleSmall:
 *            type: object
 *            properties:
 *                title:
 *                    type: string
 *                desc:
 *                    type: string
 *                img_link:
 *                    type: string
 *                brand:
 *                    type: string
 *                model:
 *                    type: string
 *                variant:
 *                    type: string
 * 
 */



/**
 * @swagger
 *  components:
 *      schema:
 *          Cart:
 *            type: object
 *            properties:
 *                cart:
 *                    type: array
 * 
 */


app.use("/users/", user_router);

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Get all users
 *      description: This api is used fetch all the users from mongodb
 *      responses:
 *          200:
 *              description: This api is used fetch all the users from mongodb
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/User'

 */

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Get user with matching id
 *      description: This api is used fetch all the users from mongodb
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *            
 *      responses:
 *          200:
 *              description: This api is used fetch all the users from mongodb
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/User'

 */




/**
 *  @swagger
 *  /users:
 *   post: 
 *        summary: sign up user
 *        description: sign up user
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullname: 
 *                              type: string      
 *                          username:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          img_url:
 *                              type: string
 *                          gender:
 *                              type: string
 *                          phone_number:
 *                              type: string
 *                          city:
 *                              type: string
 *                          address:
 *                              type: string
 *                          cart:
 *                              type: array
 *          200:
 *              description: This api is used to sign up the user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/User'
 */


/**
 *  @swagger
 *  /users/signin:
 *   post: 
 *        summary: sign in user
 *        description: sign in user
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *          200:
 *              description: This api is used to sign in the user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/User'
 */



/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: updates user by matching id
 *      description: This api is used to update user by matching id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *            
 *      responses:
 *          200:
 *              description: succesfully updated user details
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/User'

 */


/**
 *  @swagger
 *  /users/{id}:
 *   put: 
 *        summary: updates user by matching id
 *        description: This api is used to update user by matching id
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          id:
 *                              type: string
 *                          fullname:
 *                              type: string
 *          200:
 *              description: succesfully updated user details
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/User' 
 */


/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: delete user by matching id
 *      description: This api is used to delete user by matching id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *            
 *      responses:
 *          200:
 *              description: Succesfully deleted user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/User'

 */


/**
 *  @swagger
 *  /users/update-profile:
 *   post: 
 *        summary: update user
 *        description: Find by id and update user
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                          fullname: 
 *                              type: string      
 *                          username:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          img_url:
 *                              type: string
 *                          gender:
 *                              type: string
 *                          phone_number:
 *                              type: string
 *                          city:
 *                              type: string
 *                          address:
 *                              type: string
 *                          cart:
 *                              type: array
 *          200:
 *              description: This api is used to Find by id and update user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/User'
 */


/**
 *  @swagger
 *  /users/get-cart:
 *   post: 
 *        summary: get all cart items using id
 *        description: get all cart items using id
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *          200:
 *              description: get all cart items
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/Cart'
 */


/**
 *  @swagger
 *  /users/change-to-default:
 *   post: 
 *        summary: changes password to default
 *        description: changes password to default
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *          200:
 *              description: changes password to default
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 */



/**
 *  @swagger
 *  /users/remove-from-cart:
 *   post: 
 *        summary: removes item from cart items using user id and product id
 *        description: removes item from cart items using user id and product id
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: string
 *                          product_id:
 *                              type: string
 *          200:
 *              description: removes item from cart items using user id and product id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/Cart'
 */




app.use("/products/", product_router);

/**
 * @swagger
 * /products:
 *  get:
 *      summary: Get all users
 *      description: This api is used fetch all the users from mongodb
 *      responses:
 *          200:
 *              description: This api is used fetch all the users from mongodb
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Product'

 */



app.use("/admins", admin_router);

/**
 * @swagger
 * /admins:
 *  get:
 *      summary: Get all admins
 *      description: This api is used fetch all the admins from mongodb
 *      responses:
 *          200:
 *              description: This api is used fetch all the admins from mongodb
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Admin'
 */


/**
 *  @swagger
 *  /admins/announce:
 *   post: 
 *        summary: announce our message to all users using gmail
 *        description: announce our message to all users using gmail
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          announcementValue: 
 *                              type: string
 *          200:
 *              description: announce our message to all users using gmail
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: number
 */


app.use("/messages/", message_router);

/**
 * @swagger
 * /messages:
 *  get:
 *      summary: Get all messages
 *      description: This api is used fetch all the messages
 *      responses:
 *          200:
 *              description: This api is used fetch all the messages
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Message'
 */


/**
 * @swagger
 * /messages/{id}:
 *  delete:
 *      summary: delete message by matching id
 *      description: This api is used to delete message by matching id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *            
 *      responses:
 *          200:
 *              description: Succesfully deleted message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Messageinfo'

 */


/**
 *  @swagger
 *  /messages:
 *   post: 
 *        summary: send a message
 *        description: send a message
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email: 
 *                              type: string 
 *                          name: 
 *                              type: string
 *                          message: 
 *                              type: string
 *                          type: 
 *                              type: string
 *          200:
 *              description: message succesfully sent
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Messageinfo'
 */


/**
 * @swagger
 * /messages/{id}:
 *  get:
 *      summary: get message by matching id
 *      description: This api is used to delete message by matching id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: string ID required
 *            schema:
 *              type: string
 *            
 *      responses:
 *          200:
 *              description: Succesfully got the message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Message'

 */
/**
 *  @swagger
 *  /messages/reply:
 *   post: 
 *        summary: reply to a message
 *        description: reply to a message
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email: 
 *                              type: string 
 *                          replyValue: 
 *                              type: string
 *          200:
 *              description: message succesfully sent
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 */


app.use("/mailer/", mailer_router);

/**
 *  @swagger
 *  /mailer/getotp:
 *   post: 
 *        summary: get otp to email
 *        description: get otp to email
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email: 
 *                              type: string 
 *          200:
 *              description: get otp to email
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: number
 */
/**
 *  @swagger
 *  /mailer/verifyotp:
 *   post: 
 *        summary: verify otp
 *        description: verify otp
 *        requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email: 
 *                              type: string 
 *                          otp:
 *                              type: string
 *          200:
 *              description: get otp to email
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/mailerResponse'
 */


app.use('/articles/', article_router); 

/**
 * @swagger
 * /articles:
 *  get:
 *      summary: Get all articles
 *      description: This api is used to Get all articles
 *      responses:
 *          200:
 *              description: This api is used to Get all articles
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/Article'
 */

app.use('/vehicles', vehicle_router);

/**
 * @swagger
 * /vehicles:
 *  get:
 *      summary: Get all vehicle small details
 *      description: This api is used to Get all vehicle small details
 *      responses:
 *          200:
 *              description: This api is used to Get all vehicle small details
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/VehicleSmall'
 */


app.use('/allvehicles/', allvehicle_router);

/**
 * @swagger
 * /allvehicles:
 *  get:
 *      summary: Get all vehicles
 *      description: This api is used to Get all vehicles
 *      responses:
 *          200:
 *              description: This api is used to Get all vehicles
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                            $ref: '#components/schema/VehicleFull'
 */

app.use('/image/', image_router)

// start server
const PORT = 5000;
app.listen(5000, () => {
	console.log(`Server started on port ${PORT}`); 
});
