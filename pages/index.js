import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    product_id: 1,
    product_name: "Norton Internet Security 1",
    image_path: "icon/p1.png",
    price: 950,
  },
  {
    product_id: 2,
    product_name: "Norton Internet Security 2",
    image_path: "icon/p2.png",
    price: 1050,
  },
  {
    product_id: 3,
    product_name: "Norton Internet Security 3",
    image_path: "icon/p3.png",
    price: 750.00,
  },
  {
    product_id: 4,

    product_name: "Norton Internet Security 4",
    image_path: "icon/p4.png",
    price: 350,
  },
  {
    product_id: 5,

    product_name: "Norton Internet Security 5",
    image_path:"icon/p5.png",
    price: 950,
  },
  {
    product_id: 6,

    product_name: "Norton Internet Security 6",
    image_path:"icon/p6.png",
    price: 1400,
  },
  {
    product_id: 7,

    product_name: "Norton Internet Security 7",
    image_path: "icon/p7.png",

    price: 1180,
  },
  {
    product_id: 8,

    product_name: "Norton Internet Security 8",
    image_path: "icon/p2.png",
    price: 1230,
  },
  {
    product_id: 9,

    product_name: "Norton Internet Security 9",
    image_path:
      "icon/p5.png",
    price: 745,
  },
  {
    product_id: 10,
    product_name: "Norton Internet Security 10",
    image_path:
      "icon/p1.png",
    price: 2170,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}
