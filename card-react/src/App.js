import "./App.css";
import Banner from "./Components/Banner/Banner";
import Card from "./Components/Card/Card";
import MainHeader from "./Components/MainHeader";

function App() {
  var data = [
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },

    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },

    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },

    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },

    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },

    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },

    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52",
      title: "Burger King",
      desc: "North Indian, Chinese, Nepalese, Street Food, Biryani, Beverages",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ww1vrk2bhfauqarqszbt",
      title: "Dominic Pizza",
      desc: "Pizzas, Italian",
    },
    {
      src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sta9k6pe5dviblrnqukl",
      title: "Behrouz Biryani",
      desc: "Biryani, Mughlai, Lucknowi, Hyderabadi, Kebabs, North Indian, Persian, Desserts",
    },
  ];
  return (
    <>
      <MainHeader></MainHeader>
      <Banner type={2}></Banner>
      <div className="container">
        {data.map((elem, index) => (
          <Card
            src={elem.src}
            title={elem.title}
            desc={elem.desc}
            key={index}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
