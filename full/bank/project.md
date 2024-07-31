<!-- <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>bank</title>
     <link rel="stylesheet" href="bank.css">
<script src="https://kit.fontawesome.com/7ccff05ed5.js" crossorigin="anonymous"></script>
 </head>
 <body>
     <header>
         <div class="container">
             <h1 class="logo">Unity Bank</h1>
             <nav>
                 <ul>
                     <li><a href="bank.html">Home</a></li>
                     <li><a href="https://www.facebook.com/profile.php?id=100002279296854">CEO</a></li>
                     <li><a href="/full/support bot/index.html">support bot</a></li>
                 </ul>
             </nav>
         </div>
     </header>
     
     <main class="container">
         <section  class="home">
             <h2>Welcome to Unity Bank</h2>
             <p>Your trusted financial partner.</p>
         </section>
         
         <section class="account-summary">
             <h2>Account Summary</h2>
             <div class="account-details">
                 <p>Balance: ₾<span id="balance">50000.00</span></p>
             </div>
         </section>
         
         <section class="transfer-funds">
             <h2>Transfer Funds</h2>
             <form id="transfer-form">
                 <label for="amount">Amount:</label>
                 <input type="number" id="amount" required>
                 
                 <label for="recipient">Recipient:</label>
                 <input type="text" id="recipient" required>
                 
                 <button type="button" onclick="transferFunds()">Transfer</button>
             </form>
             <p id="transfer-message"></p>
         </section>

         <section class="deposit-page">
            <h2>Deposit Cash Here</h2>

            <form id="deposit-form">
            <label for="deposit">Deposit:</label>
            <input type="text" id="deposit" placeholder="deposit cash" /><br>
            <button id="deposit-btn" type="button">Submit</button>
            <p id="deposit-message"></p>
        </form>
         </senction>
     </main>
     
 

     <footer class="footer">
        <div class="footer-container">
            <div class="footer-section about">
                <h3>About Us</h3>
                <p>We are committed to providing the best banking experience. Our services include savings accounts, loans, and more.</p>
            </div>
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p>Email: unitybank@gmail.com</p>
                <p>Phone: +995 555 555 555</p>
                <p>Address: GOA st., Tbilisi, Georgia</p>
            </div>
            <div class="footer-section social">
                <h3>Follow Us</h3>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.github.com" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 Unity. All Rights Reserved.
        </div>
    </footer>

     <script src="bank.js"></script>
 </body>
 </html>
  -->


/*
მე შეცაცვლელი მაქვს ნავიგეიშენ ბარი
*/

/* * {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 80%;
    margin: auto;
    overflow: hidden;
}

header {
    background: #333;
    color: #fff;
    padding-top: 30px;
    min-height: 70px;
    border-bottom: #747474 3px solid;
}

.logo {
    float: left;
}

nav {
    width: 100%;
    height: 80px;
    margin-top: 10px;
}

ul {
    list-style: none;
}

li {
    display: inline;
    margin-left: 20px;
}

a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
}
a:hover {
    color: #808082;
}

main {
    padding: 20px 0;
}

.home {
    width: 1150px;
    background-color: #fff;
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgb(63, 63, 63),
    -1px -1px 10px rgb(63, 63, 63);
}
.account-summary {
    background: #fff;
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgb(63, 63, 63),
    -1px -1px 10px rgb(63, 63, 63);
    font-size: 18px;
    color: #444;
}

.transfer-funds {
    background: #fff;
    margin: 20px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgb(63, 63, 63),
    -1px -1px 10px rgb(63, 63, 63);
    width: 400px;
    height: 250px;
    margin-left: 5px;
}

section.deposit-page {
    width: 400px;
    height: 250px;
    padding: 10px;
    box-shadow: 2px 2px 10px rgb(63, 63, 63),
    -1px -1px 10px rgb(63, 63, 63);
    margin-top: -284px;
    margin-left: 780px;
    border-radius: 5px;
    
}

form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
}

label {
    margin-top: 10px;
}

input {
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #656565;
}

/*footer side*/
/* 