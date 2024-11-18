import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";


const NewsDetails = () => {

    const dataNews = useLoaderData();
    // console.log(dataNews.data[0])
    const currentNews = dataNews.data[0]

    return (
        <div>
           <Header></Header>
           <main className="w-11/12 mx-auto grid grid-cols-12">

           <section className="col-span-9">
                <h1 className="font-semibold mb-5">Dragon News</h1>

                    <div className="card bg-base-100 w-fit shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        src={currentNews.image_url
                        }
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="card-title">{currentNews.title}</h2>
                        <p>{currentNews.details}</p>
                        <div className="card-actions">
                        <Link to={`/category/${currentNews.category_id}`} className="bg-green-500 btn py-2 px-2">All news in this category</Link>
                        </div>
                    </div>
                    </div>
           </section>
           <aside className="col-span-3">
                <RightNav/>
           </aside>
           
           </main>
        </div>
    );
};

export default NewsDetails;