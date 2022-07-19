# Google Meet Clone
Developed a React based Google Meet Application with one-to-one video calling and text-chatting features. Users can also share their screen.

## Setup
First clone this github repository. After that open terminal in the root directory and run **npm install**. Then go to the client directory and again run **npm install**. This will install all the required dependencies. Make sure you have React and Redis installed in your computer.

Now in your main folder create a new **.env** file and inside it write **PORT=4000**.  

Now open a new terminal and run **redis-server**. In the root directory run **node server.js** and in the client directory run **npm start**. Application will start running in http://localhost:3000/.

## Application Description
The home page will look like this:

![Screenshot (103)](https://user-images.githubusercontent.com/83599568/179677239-680cba7d-fcd1-4ec6-8fe7-32d0853f8ab0.png)

Here you have to click on the **New Meeting** button. You will be directed to the call page with a unique url.

The call page will look like this:

![Screenshot (104)](https://user-images.githubusercontent.com/83599568/179678151-3b22ccfc-7084-4b79-a6f4-85e141f555c6.png)

Here in the top left side you can see a **Meeting Info** box. Copy the URL present in the box and then open a new tab and paste it. You will see that both the peers are connected and video and audio starts transferring.

  <img src="https://user-images.githubusercontent.com/83599568/179679546-c22a65d2-eb43-4a86-bf6e-6c72b1d2c165.png" width="50%"><img src="https://user-images.githubusercontent.com/83599568/179679705-3f42ee16-245c-4054-8cc7-d2467fb9857e.png" width="50%">

Since I am using a single device you can see me in both the screens :) 

Now for sending text messages, you can click on the message icon on the top right menu and then write some text and send it. It will be displayed to the other user in a floating message form.

<img src="https://user-images.githubusercontent.com/83599568/179681604-b720662b-9b8d-469f-ae98-de250a56703e.png" width="50%"><img src="https://user-images.githubusercontent.com/83599568/179681670-8ef9c418-f687-4414-b851-18903819043d.png" width="50%">

<img src="https://user-images.githubusercontent.com/83599568/179682359-c2308feb-0720-4d3d-ae8c-3868340d32d5.png" width="50%"><img src="https://user-images.githubusercontent.com/83599568/179682487-570e5cb8-b236-425b-8899-a4db23ee1471.png" width="50%">

You can also close the **Meeting Info** box if you want to.

![Screenshot (112)](https://user-images.githubusercontent.com/83599568/179683169-e18eaf01-e469-484e-bdef-5b97d162ee2d.png)

Now for sharing screen, you can click on the **Present now** button on the bottom left side. It will ask you which screen you want to share. Select it and the press **Share** button. Your screen will be shared with the other user.

![Screenshot (113)](https://user-images.githubusercontent.com/83599568/179683687-1f37b114-a0bd-47ef-8a08-c94b67ed8b26.png)

Now if you want to close the call you can press on the phone icon on the bottom centre of your screen. Your connection with other peer will be destroyed and you will be redirected to the home page.

# Conclusion

Thank you for visiting my project. Hope you like it. If there is any issue, feel free to contact me @ sameerraj0820@gmail.com 
