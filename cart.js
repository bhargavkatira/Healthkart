let cart_data = JSON.parse(localStorage.getItem("cart"));
let data_div = document.querySelector("#cart_data");
let totalAmount = document.getElementById('totalAmount');
let proceedToPay = document.getElementById('proceedtopay');
let cartItem = document.getElementById('cartItem');
let pincode = document.getElementById('pincode');
let coupon = document.getElementById('coupon');
let order = document.getElementById('order');
let shipping = document.getElementById('shipping');
let count = 0;
// let data_div = document.getElementById("cart_data");

let datadiv = document.getElementById("cart_data");
<<<<<<< HEAD

=======
let total = 0;
>>>>>>> cbc58bf44f99100123fd5a495c5ffbcfa4046281
function Cart_items() {
       

        cart_data.forEach(function (product) {

                let div = document.createElement("div");
                let divtxt = document.createElement("span");

                // let increment = document.createElement('button');
                // increment.innerHTML = "+";
                // let btn = document.createElement('input');
                // btn.value = 1;
                // let decrement = document.createElement('button');
                // decrement.innerHTML = "-";


                let m_name = document.createElement('b');
                m_name.innerText = product.name;

                let m_price1 = document.createElement('p');
                m_price1.innerText = '₹' + " " + product.Price1;

                let image = document.createElement('img');
                image.src = product.image;

<<<<<<< HEAD
                div.append(image, m_name, increment, btn, decrement, m_price1);
                datadiv.append(div);

                increment.addEventListener('click', function () {
                        let value = parseInt(btn.value, 15);
                        if (value < 10)
                        {
                                value++
                        }
                        btn.value = value;
                });
                decrement.addEventListener('click', function () {
                        let value = parseInt(btn.value, 15);
                        if (value > 1)
                        {
                                value--
                        }
                        btn.value = value;
                });
=======
                divtxt.append(m_name, m_price1)
                div.append(image, divtxt);
                datadiv.append(div);
>>>>>>> cbc58bf44f99100123fd5a495c5ffbcfa4046281

                total += Number(product.Price1);

                // increment.addEventListener('click', function () {
                //         let value = parseInt(btn.value, 15);
                //         if (value < 10)
                //         {
                //                 value++
                //         }
                //         btn.value = value;
                // });
                // decrement.addEventListener('click', function () {
                //         let value = parseInt(btn.value, 15);
                //         if (value > 1)
                //         {
                //                 value--
                //         }
                //         btn.value = value;
                        
                // });
                // console.log(product.Price1)

        });
       
        proceedToPay.innerHTML = `Proceed to Pay ₹ ${total} `;
        proceedToPay.addEventListener('click', function(){
                location.href = "checkout.html";
        })
        totalAmount.innerHTML = `Final Payable ₹ ${total} `;
        cartItem.innerHTML = `My Cart`
        pincode.innerHTML = 'Pincode'
        coupon.innerHTML = 'Apply Code →'
        order.innerHTML = "Order Summery";
        shipping.innerHTML = "Shipping Charges - Free"
}



Cart_items()

