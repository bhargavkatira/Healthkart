//Pooja Js - 1st
let count = 0;
let images = [];
let time = 2000;

images[0] = 'https://img6.hkrtcdn.com/15645/bnr_1564495_o.jpg';
images[1] = 'https://img10.hkrtcdn.com/15640/bnr_1563949_o.jpg';
images[2] = 'https://img6.hkrtcdn.com/15538/bnr_1553705_o.jpg';
images[3] = 'https://img8.hkrtcdn.com/15641/bnr_1564057_o.jpg';
images[4] = 'https://img8.hkrtcdn.com/14853/bnr_1485287_o.jpg';
images[5] = 'https://img6.hkrtcdn.com/15632/bnr_1563185_o.png';
function slidingShows() {
  document.silde.src = images[count];
  if (count < images.length - 1)
  {
    count++
  }
  else
  {
    count = 0;
  }
  setTimeout('slidingShows()', time)

}
window.onload = slidingShows;



//Bhargav js -1st
    const medicine = [
        {
        image: "https://img4.hkrtcdn.com/14798/prd_1479773-HealthKart-HK-Vitals-Healthy-Joints-60-tablets_c_t.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
        Price1: " 4535",
        price2: " 5399",
        discount: "16% off",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.6(1234)",
        },
        {
          image: "https://img6.hkrtcdn.com/11003/prd_1100235-MuscleBlaze-Gold-Gainer-XXL-2.2-lb-Chocolate-Bliss_c_t.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1: " 4535",
          price2: " 5399",
          discount: "16% off",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating : "4.6(1234)",

        },
        {
          image: "https://img4.hkrtcdn.com/11965/prd_1196443-MuscleBlaze-High-Protein-Natural-Peanut-Butter-Unsweetened-0.750-kg-Crunchy_c_t.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1: " 4535",
          price2: " 5399",
          discount: "16% off",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating: "4.6(1234)",
        },
        {
          image: "https://img10.hkrtcdn.com/15757/prd_1575689_c_t.jpg",
          name : "MuscleBlaze Mass Gainer XXL, 11 lb Chocolate",
          Price1: " 4535",
          price2: " 5399",
          discount: "16% off",
          button: "Add",
          pricefinal : "Premium Price : 4324",
          rating: "4.6(1234)",
        },

    ]
    const medicine_json = JSON.stringify(medicine);
    localStorage.setItem("MyMedicine", medicine_json);
    let med = localStorage.getItem("MyMedicine");
    med = JSON.parse(med);
    // console.log("med", med);

    function medProduct(){
        let div_data = document.getElementById("data");
        med.forEach(function(products) {
            let div = document.createElement('div');
            let pricecart = document.createElement('div');

          let m_name = document.createElement('h4');
            m_name.innerText = products.name;

            let m_price = document.createElement('b');
            m_price.innerText = '₹'+ products.Price1;

            let m_button = document.createElement('button');
            m_button.innerHTML = "🛒 ADD";
            m_button.onclick = function (){
                addtocart(products);
            };

          let m_discount = document.createElement('h5');
            m_discount.innerText = products.discount;

            let image = document.createElement('img');
            image.src = products.image;

          let m_pricefinal = document.createElement('h6');
            m_pricefinal.innerText = products.pricefinal;

          let m_rating = document.createElement('p');
          m_rating.innerHTML = '★ ' + products.rating;

          pricecart.append(m_price, m_button)
            div.append(image,m_discount,m_name, m_rating, pricecart, m_pricefinal);
            div_data.append(div);

        });
    }
medProduct();



  // srinivas footer code

  function function1() {
    alert('subscribed successfully')
}

    if(localStorage.getItem("cart")===null){
        localStorage.setItem("cart",JSON.stringify([]));
    }
    function addtocart(p){
         let cart_data = JSON.parse(localStorage.getItem("cart"));
         cart_data.push(p);
         localStorage.setItem("cart", JSON.stringify(cart_data));
    }