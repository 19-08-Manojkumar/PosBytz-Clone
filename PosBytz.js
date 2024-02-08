      const nav1 = document.querySelectorAll(".nav--links__items");
      const nav2 = document.querySelectorAll(".nav--links2__items");
      const navIcon = document.querySelector(".navIcon");
      const nav = document.querySelector(".nav--links");

      

      
      // Drop Down
      nav1.forEach((nav) => {
        nav.addEventListener("mouseover", () => {
          if (nav.children.length > 1) {
            if (screen.width > 720) {
              nav.children[1].classList.add("navbar--links__open1");
            }
            nav.children[1].classList.add("navbar--links__open");
          }
        });

        nav.addEventListener("mouseout", () => {
          if (screen.width > 720) {
            nav.children[1].classList.remove("navbar--links__open1");
          }
          nav.children[1].classList.remove("navbar--links__open");
        });
      });

      nav2.forEach((nav) => {
        nav.addEventListener("mouseover", () => {
          if (nav.children.length > 1) {
            if (screen.width > 720) {
              nav.children[1].classList.add("navbar--links__open1");
            }
            nav.children[1].classList.add("navbar--links__open");
          }
        });

        nav.addEventListener("mouseout", () => {
          if (screen.width > 720) {
            nav.children[1].classList.remove("navbar--links__open1");
          }
          nav.children[1].classList.remove("navbar--links__open");
        });
      });

      // DropDown end
  
      navIcon.addEventListener("click", () => {
        navIcon.classList.toggle("fa-x");
      nav.classList.toggle("navbar--links__open");
    });


      // customer scroll
      const swipe = document.querySelector(".swipe");
      const swipe2 = document.querySelector(".swipe2");
      const swipe3 = document.querySelector(".swipe3");
      const swipeLeft = document.querySelector(".swipeLeft");
      const swipeLeft2 = document.querySelector(".swipeLeft2");
      const swipeLeft3 = document.querySelector(".swipeLeft3");
      const swipeRight = document.querySelector(".swipeRight");
      const swipeRight2 = document.querySelector(".swipeRight2");
      const swipeRight3 = document.querySelector(".swipeRight3");

      const customers = [
        "https://posbytz.com/wp-content/uploads/2023/09/maaza.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Kebab-time.png",
        "https://posbytz.com/wp-content/uploads/2023/02/shero-01.png",
        "https://posbytz.com/wp-content/uploads/2023/07/msfood.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Al-karakand-e1695319053772.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Jazz-cafe.jpg",
        "https://posbytz.com/wp-content/uploads/2023/09/HOT-POT.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Diamond-Restaurant.png",
      ];

      const customers2 = [
        "https://posbytz.com/wp-content/uploads/2023/09/Sultan-Al-Arab.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Besan-Flowers.png",
        "https://posbytz.com/wp-content/uploads/2023/07/tails_of_city.jpg",
        "https://posbytz.com/wp-content/uploads/2023/07/elite_fish.png",
        "https://posbytz.com/wp-content/uploads/2023/07/continental_coffee.png",
        "https://posbytz.com/wp-content/uploads/2023/09/ROYCE-Chocolate.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Zoara.png",
        "https://posbytz.com/wp-content/uploads/2023/07/nashama_coffee.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Chimney-Cone.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Dokkan-Kebab.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Sams-Pizza.png",
      ];

      const customers3 = [
        "https://posbytz.com/wp-content/uploads/2023/09/Smash-me.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Sams-Pizza.png",
        "https://posbytz.com/wp-content/uploads/2023/09/tabiboba_new_pink_logo-1.png",
        "https://posbytz.com/wp-content/uploads/2023/07/lassi_shakes.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Chimney-Cone.png",
        "https://posbytz.com/wp-content/uploads/2023/07/tehran_taste_persia.png",
        "https://posbytz.com/wp-content/uploads/2023/07/malabar-gas-trading-llc.png",
        "https://posbytz.com/wp-content/uploads/2023/09/TD.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Teklos.png",
        "https://posbytz.com/wp-content/uploads/2023/09/Tulu-Florals.png",
      ];
      // Customer Swipe
      let custSwiper = [0, 1, 2];
      let custSwiper2 = [0, 1, 2];
      let custSwiper3 = [0, 1, 2];

      swipe.addEventListener("touchstart", startTouch, false);
      swipe.addEventListener("touchmove", moveTouch, false);
      swipe2.addEventListener("touchstart", startTouch, false);
      swipe2.addEventListener("touchmove", moveTouch2, false);
      swipe3.addEventListener("touchstart", startTouch, false);
      swipe3.addEventListener("touchmove", moveTouch3, false);

      let initialX = null;
      function startTouch(e) {
        initialX = e.touches[0].clientX;
      }

      function moveTouch(e) {
        if (initialX === null) {
          return;
        }

        let currentX = e.touches[0].clientX;

        console.log(initialX, currentX);

        if (initialX - currentX > 0) {
          let temp;
          custSwiper[2] >= customers.length
            ? (temp = 0)
            : (temp = custSwiper[2] + 1);
          custSwiper = [custSwiper[1], custSwiper[2], temp];
          createSwiper();
        }

        if (initialX - currentX < 0) {
          let temp;
          custSwiper[0] === 0
            ? (temp = customers.length - 1)
            : (temp = custSwiper[0] - 1);
          custSwiper = [temp, custSwiper[0], custSwiper[1]];
          createSwiper();
        }
      }

      function moveTouch2(e) {
        if (initialX === null) {
          return;
        }

        let currentX = e.touches[0].clientX;

        console.log(initialX, currentX);

        if (initialX - currentX > 0) {
          let temp;
          custSwiper2[2] >= customers2.length
            ? (temp = 0)
            : (temp = custSwiper2[2] + 1);
          custSwiper2 = [custSwiper2[1], custSwiper2[2], temp];
          createSwiper();
        }

        if (initialX - currentX < 0) {
          let temp;
          custSwiper2[0] === 0
            ? (temp = customers2.length - 1)
            : (temp = custSwiper2[0] - 1);
          custSwiper2 = [temp, custSwiper2[0], custSwiper2[1]];
          createSwiper();
        }
      }

      function moveTouch3(e) {
        if (initialX === null) {
          return;
        }

        let currentX = e.touches[0].clientX;

        console.log(initialX, currentX);

        if (initialX - currentX > 0) {
          let temp;
          custSwiper3[2] >= customers3.length
            ? (temp = 0)
            : (temp = custSwiper3[2] + 1);
          custSwiper3 = [custSwiper3[1], custSwiper3[2], temp];
          createSwiper();
        }

        if (initialX - currentX < 0) {
          let temp;
          custSwiper3[0] === 0
            ? (temp = customers3.length - 1)
            : (temp = custSwiper3[0] - 1);
          custSwiper3 = [temp, custSwiper3[0], custSwiper3[1]];
          createSwiper();
        }
      }

      swipeLeft.addEventListener("click", () => {
        let temp;
        custSwiper[2] >= customers.length
          ? (temp = 0)
          : (temp = custSwiper[2] + 1);
        custSwiper = [custSwiper[1], custSwiper[2], temp];
        createSwiper();
      });

      swipeRight.addEventListener("click", () => {
        let temp;
        custSwiper[0] === 0
          ? (temp = customers.length - 1)
          : (temp = custSwiper[0] - 1);
        custSwiper = [temp, custSwiper[0], custSwiper[1]];
        createSwiper();
      });

      swipeLeft2.addEventListener("click", () => {
        let temp;
        custSwiper2[2] >= customers2.length
          ? (temp = 0)
          : (temp = custSwiper2[2] + 1);
        custSwiper2 = [custSwiper2[1], custSwiper2[2], temp];
        createSwiper();
      });

      swipeRight2.addEventListener("click", () => {
        let temp;
        custSwiper2[0] === 0
          ? (temp = customers2.length - 1)
          : (temp = custSwiper2[0] - 1);
        custSwiper2 = [temp, custSwiper2[0], custSwiper2[1]];
        createSwiper();
      });

      swipeLeft3.addEventListener("click", () => {
        let temp;
        custSwiper3[2] >= customers3.length
          ? (temp = 0)
          : (temp = custSwiper3[2] + 1);
        custSwiper3 = [custSwiper3[1], custSwiper3[2], temp];
        createSwiper();
      });

      swipeRight3.addEventListener("click", () => {
        let temp;
        custSwiper3[0] === 0
          ? (temp = customers3.length - 1)
          : (temp = custSwiper3[0] - 1);
        custSwiper3 = [temp, custSwiper3[0], custSwiper3[1]];
        createSwiper();
      });

      const createSwiper = () => {
        swipe.innerHTML = `<img src="${customers[custSwiper[0]]}"></img>
                         <img src="${customers[custSwiper[1]]}"></img>
                         <img src="${customers[custSwiper[2]]}"></img>`;

        swipe2.innerHTML = `<img src="${customers2[custSwiper2[0]]}"></img>
                          <img src="${customers2[custSwiper2[1]]}"></img>
                          <img src="${customers2[custSwiper2[2]]}"></img>`;

        swipe3.innerHTML = `<img src="${customers3[custSwiper3[0]]}"></img>
                          <img src="${customers3[custSwiper3[1]]}"></img>
                          <img src="${customers3[custSwiper3[2]]}"></img>`;
      };

      createSwiper();


      // ****Customer Testimonials***

      // Reviews Start

      const testimonials = [
        {
          img: "https://posbytz.com/wp-content/uploads/2023/09/maaza-85x90.png",
          name: "MazaArabia, KSA",
          review:
            "We are providing broast chicken food across KSA with about 25 outlets and growing. With posbytz we have automated the entire operations from purchases, inventory, sales and also enabled our own online ordering system with ease. We will definetly recomended PosBytz to all restaurant ERP Software to F&B brands expanding as franchise business",
        },
        {
          img: "https://posbytz.com/wp-content/uploads/2021/09/posbytz_review_farmarika.webp",
          name: "Farmarika",
          review:
            "This ERP platform is simple and excellent . It is has the omnichannel model to sell the products. I have been using this product for more than 1 year. It is very good to manage the catalogue, items, pricing, taxing , customers, employees etc",
        },
        {
          img: "https://posbytz.com/wp-content/uploads/2021/09/tehran_taste_persia-85x90.png",
          name: "Tehran - The Taste of Persia",
          review:
            "I have been using PosBytz for more than two years, would definetly recommend to all my dellow restaurant owners given the fact it gives complete control over your business. Best would be the branded apps and online ordering platform integrated with POS and inventory.",
        },
        {
          img: "https://posbytz.com/wp-content/uploads/2023/09/Al-karakand-e1695319023203-83x71.png",
          name: "Alkarkand Abha KSA",
          review:
            "We have rceently migrated our software to PosBytz so far have been always improvising the features based on request an d strongly recommend for F&B groups managing complex restaurant operations with multiple brands from purchases, inventory, transfers, Accounting to P&L reports. Integrated QR code ordering system with POS works seamlessly and gives a great customer experience.",
        },
        {
          img: "https://posbytz.com/wp-content/uploads/2023/09/Sams-Pizza-85x90.png",
          name: "Sam's Pasta Pizza, Qatar",
          review:
            "We are an traditional Italian cuisine based brand. Have been using PosBytz for our Restaurant Management operations and so far there has been no issues with respect to the software and as a owner can able see my business online from anywhere. PosBytz is very easy to use for setting up menu , ingredients/recipes , POS , inventory etc..,",
        },
      ];


    let l = 0;
    let r = 1;

    const reviews = document.querySelector(".reviews--wrapper");

    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
  
    left.addEventListener("click", leftSwipe);
    right.addEventListener("click", rightSwipe);
    
  
    function leftSwipe() {
      if (l === 0) {
        l = testimonials.length - 1;
      }
      l -= 1;
      if (r === 0) {
        r = testimonials.length - 1;
      }
      r -= 1;
      reviewl.innerHTML = `<div class="reviews--header">
                            <div class="detail">
                              <img src="${testimonials[l].img}" alt="logo">
                              <h4>${testimonials[l].name}</h4>
                            </div>
                          <div class="ratings">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                          </div>
                        </div>
                        <p>${testimonials[l].review}</p>`;
  
      reviewr.innerHTML = `<div class="reviews--header">
                            <div class="detail">
                              <img src="${testimonials[r].img}" alt="logo">
                              <h4>${testimonials[r].name}</h4>
                            </div>
                          <div class="ratings">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                          </div>
                          </div>
                          <p>${testimonials[r].review}</p>`;
    }
  
    function rightSwipe() {
      if (r === testimonials.length - 1) {
        r = 0;
      }
      r += 1;
      if (l === testimonials.length - 1) {
        l = 0;
      }
      l++;
  
      reviewl.innerHTML = `  <div class="reviews--header">
    <div class="detail">
        <img src="${testimonials[l].img}" alt="logo">
        <h4>${testimonials[l].name}</h4>
    </div>
    <div class="ratings">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
  </div>
  <p>${testimonials[l].review}</p>`;
  
      reviewr.innerHTML = `<div class="reviews--header">
  <div class="detail">
      <img src="${testimonials[r].img}" alt="logo">
      <h4>${testimonials[r].name}</h4>
  </div>
  <div class="ratings">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
  </div>
  </div>
  <p>${testimonials[r].review}</p>`;
    }
  
    const reviewl = document.createElement("div");
    reviewl.classList.add("reviews");
    reviewl.innerHTML = `  <div class="reviews--header">
    <div class="detail">
        <img src="${testimonials[l].img}" alt="logo">
        <h4>${testimonials[l].name}</h4>
    </div>
    <div class="ratings">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
  </div>
  <p>${testimonials[l].review}</p>`;
  
    const reviewr = document.createElement("div");
    reviewr.classList.add("reviews");
    reviewr.innerHTML = `<div class="reviews--header">
  <div class="detail">
      <img src="${testimonials[r].img}" alt="logo">
      <h4>${testimonials[r].name}</h4>
  </div>
  <div class="ratings">
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
  </div>
  </div>
  <p>${testimonials[r].review}</p>`;
    reviews.appendChild(reviewl);
  
    if (screen.width > 640) {
      reviews.appendChild(reviewr);
    }


    // Features Start

    const featuresText = document.querySelector(".features-container");
    const pos = document.querySelector("#pos");
    const order = document.querySelector("#order");
    const purchase = document.querySelector("#purchase");
    const ecom = document.querySelector("#ecom");
    const acc = document.querySelector("#acc");
    const crm = document.querySelector("#crm");
    const hr = document.querySelector("#hr");
    
    featuresText.innerHTML = `<div class="features-container__text">
    <h3>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations. Here are some key highlights:</h3>
    <p><i class="fa-solid fa-check"></i>Easy-to-Use Interface</p>
    <p><i class="fa-solid fa-check"></i>Device Agnotic can be installed in Windows, Android and IOS</p>
    <p><i class="fa-solid fa-check"></i>Works well for both Restaurant and Retail business</p>
    <p><i class="fa-solid fa-check"></i>Multiple channel Sales management</p>
    <p><i class="fa-solid fa-check"></i>Integrations with printers, scanner ,weighing scales and label printers</p>
    </div>
    <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-87.png" alt="">`;
  
    pos.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      pos.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
      <h3>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations. Here are some key highlights:</h3>
      <p><i class="fa-solid fa-check"></i>Easy-to-Use Interface</p>
      <p><i class="fa-solid fa-check"></i>Device Agnotic can be installed in Windows, Android and IOS</p>
      <p><i class="fa-solid fa-check"></i>Works well for both Restaurant and Retail business</p>
      <p><i class="fa-solid fa-check"></i>Multiple channel Sales management</p>
      <p><i class="fa-solid fa-check"></i>Integrations with printers, scanner ,weighing scales and label printers</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-87.png" alt="">`;
    });
  
    order.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      order.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
      <h3 style="color: #a90030">Our order management system is designed to streamline and optimize the orders from multiple channels outlets or online channels. Here are some key features of our order management system:</h3>
      <p><i class="fa-solid fa-check"></i>Manage Sales orders from multiple channels</p>
      <p><i class="fa-solid fa-check"></i>Customise multi pricing for same items different channels</p>
      <p><i class="fa-solid fa-check"></i>Manage inventory of SKUs for different channels</p>
      <p><i class="fa-solid fa-check"></i>Get consolidates reports based on orders from all channels</p>
      <p><i class="fa-solid fa-check"></i>Manage Delivery for online orders through our Delivery options</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-6-1.png" alt="">`;
    });
  
    purchase.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      purchase.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
        <h3 style="color: #24007e">Our comprehensive purchase and inventory management features empower your retail or restaurant business to efficiently manage and optimize your purchasing processes and inventory levels. Here are the key features that our software offers:</h3>
        <p><i class="fa-solid fa-check"></i><strong>Purchase Order Creation:</strong> Generate purchase orders directly within the system</p>
        <p><i class="fa-solid fa-check"></i><strong>Supplier Management:</strong> Manage your vendors track all your purchase and payments against any vendor</p>
        <p><i class="fa-solid fa-check"></i><strong>Inventory Tracking:</strong> Keep real-time track of your inventory levels, including stock quantities, locations, and availability.</p>
        <p><i class="fa-solid fa-check"></i><strong>Reorder Point and Auto-Replenishment:</strong> Set up reorder points for products to automatically trigger purchase orders when inventory reaches a predefined threshold.</p>
        <p><i class="fa-solid fa-check"></i><strong>Reporting and Analytics:</strong> Generate comprehensive reports and analyse inventory data to gain insights into cost of goods, inventory stock reports etc..,</p>
        </div>
        <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-9-1.png" alt="">`;
    });
  
    ecom.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      ecom.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
      <h3 style="color: #a90030">Our Omnichannel ecommerce and online ordering features provide a seamless and convenient way for your retail or restaurant business to expand its reach and cater to the growing demands of online customers.</h3>
      <p><i class="fa-solid fa-check"></i><strong>Online Store Creation:</strong> Establish an attractive and user-friendly online store to showcase your products or menu items. Customize the design, layout, and branding to create a unique online shopping experience that reflects your brand identity</p>
      <p><i class="fa-solid fa-check"></i><strong>Product Catalog Management:</strong> Easily manage your product inventory within the online store. Add new products, update pricing and descriptions, and categorize items for easy navigation.</p>
      <p><i class="fa-solid fa-check"></i><strong>Order Placement:</strong> Allow customers to place orders directly through your online store along with secure payments options</p>
      <p><i class="fa-solid fa-check"></i><strong>Delivery and Pickup Options:</strong> Offer customers the choice of delivery or pickup for their online orders. Provide accurate delivery time estimates, define delivery zones, and delivery fees.</p>
      <p><i class="fa-solid fa-check"></i><strong>Headless commerce API’s :</strong> Build your ecommerce website as per your UI/UX requirement in ease using our on-self Headless commerce API’s</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-6-1.png" alt="">`;
    });
  
    acc.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      acc.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
      <h3 style="color: #1aa480">Our accounting and finance features provide robust tools to manage the financial aspects of your retail or restaurant business from tracking expenses to generating financial reports</h3>
      <p><i class="fa-solid fa-check"></i><strong>General Ledger:</strong>Maintain a centralized and organized record of your financial transactions, including sales, purchases, expenses, and payments. Our software automatically updates the general ledger, ensuring accurate and up-to-date financial reports</p>
      <p><i class="fa-solid fa-check"></i><strong>Accounts Payable and Receivable:</strong>Manage your payables and receivables efficiently. Keep track of outstanding invoices, manage vendor payments, and handle customer invoices and payments.</p>
      <p><i class="fa-solid fa-check"></i><strong>Financial Reporting:</strong>Generate various financial reports, such as income statements, balance sheets, Trial balance, General Ledgers and profit and loss statements.</p>
      <p><i class="fa-solid fa-check"></i><strong>Expense Management:</strong>Track and categorize expenses, including overhead costs, vendor payments, and employee reimbursements.</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-3-1.png" alt="">`;
    });
  
    crm.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      crm.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
      <h3 style="color: #6C0758">Our CRM (Customer Relationship Management) and marketing automation features are designed to help you effectively manage customer interactions, nurture relationships, and automate marketing campaigns.</h3>
      <p><i class="fa-solid fa-check"></i><strong>Customer Database Management:</strong> Maintain a centralized customer database with detailed profiles, including contact information, purchase history, preferences, and communication history.</p>
      <p><i class="fa-solid fa-check"></i><strong>Customer Grouping:</strong> Group your customer database into segments based on demographics, behaviour, purchase history, or other criteria</p>
      <p><i class="fa-solid fa-check"></i><strong>Email Marketing Automation:</strong> Automate email campaigns and workflows to engage customers at various stages of their journey. Set up triggered emails for welcome messages, occasional days, abandoned carts, order confirmations, and more.</p>
      <p><i class="fa-solid fa-check"></i><strong>Customer Communication: Manage customer communication through various channels, including email, SMS, and social media. relationships. Social Media Integration:</strong> Integrate with social media platforms to monitor and engage with customers on social channels.</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/Untitled-16-1.png" alt="">`;
    });
  
    hr.addEventListener("click", () => {
      const active = document.querySelector(".active");
      if (active) {
        active.classList.remove("active");
      }
      hr.classList.add("active");
      featuresText.replaceChildren = "";
      featuresText.innerHTML = `<div class="features-container__text">
      <h3 style="color: brown">Our HR (Human Resources) and Payroll features provide comprehensive tools to streamline your employee management and payroll processes. Here are the key features our software offers:</h3>
      <p><i class="fa-solid fa-check"></i><strong>Employee Database:</strong> Maintain a centralized employee database with essential information, including personal details, employment history, job roles, and certifications.</p>
      <p><i class="fa-solid fa-check"></i><strong>Attendance and Time Tracking:</strong> Track employee attendance and working hours efficiently. Our software supports various methods of time tracking, including manual entry, biometric devices, or integrations with time clock systems.</p>
      <p><i class="fa-solid fa-check"></i><strong>Leave Management:</strong> Streamline the process of managing employee leaves, including vacation days, sick leave, and other types of time off.</p>
      <p><i class="fa-solid fa-check"></i><strong>Payroll Processing:</strong> Automate your payroll calculations and streamline the payroll process. Our software handles salary calculations, tax deductions, benefits, and other payroll components..</p>
      <p><i class="fa-solid fa-check"></i><strong>Tax & Statutory Compliance:</strong> Stay compliant with tax regulations by automating tax calculations and deductions</p>
      </div>
      <img src="https://posbytz.com/wp-content/uploads/2023/07/369.png" alt="">`;
    });
    // Features End
