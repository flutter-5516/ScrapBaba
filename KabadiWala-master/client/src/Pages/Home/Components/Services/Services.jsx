import "./Services.css"
import { useState, useEffect } from "react"
import { services } from "./Data"


const Services = () => {

    const [allServices, setAllServices] = useState([])
    const [filtered, setFiltered] = useState([])
    const [active, setActive] = useState("All")

    useEffect(() => {
        setAllServices(services)
        setFiltered(allServices)
    }, [allServices])


    useEffect(() => {

        if (active === "All") {
            setFiltered(allServices)
            return;
        }


        if (active === "Individual") {
            const individual = allServices.filter((service) => {
                return service.category === active
            })
            setFiltered(individual)
        }

        if (active === "Industry") {
            const industry = allServices.filter((service) => {
                return service.category === active
            })
            setFiltered(industry)
        }
    }, [allServices, active])

    return (
        <section className="services">
           <div>
                <h2 className="heading">Services</h2>
                <h4>We provide services on individual as well as industry level.</h4>
           </div>
            <div className="filter">
                <div className="filter-btn">
                    <h2 className={active === "All" ? 'active' : ""} onClick={() => setActive("All")}>All</h2>
                    <h2 className={active === "Individual" ? 'active' : ""} onClick={() => setActive("Individual")}>Individual</h2>
                    <h2 className={active === "Industry" ? 'active' : ""} onClick={() => setActive("Industry")}>Industry</h2>
                </div>

                <div className="filter-cards">
                    {
                        filtered.map((item) => {
                            const { id, image, heading, body } = item;
                            return (
                                <div className="filter-card" key={id}>
                                    <img src={image} alt="" />
                                    <div className="content">
                                        <h4>{heading}</h4>
                                        <p>{body}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services