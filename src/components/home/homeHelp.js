import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import decoration from "../../assets/Decoration.svg"
import "../../scss/home/homeHelp.scss"


const HomeHelp = () => {
    const [category, setCategory] = useState("fundation");
    const [itemOffset, setItemOffset] = useState(0);
    const [startPage, setStartPage] = useState(0);
    const [page, setPage] = useState(0);


    const items = [
        {
            organization: `Fundacja “Dbam o Zdrowie”`,
            descr: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            what: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
            category: "fundation"
        },
        {
            organization: `Fundacja “Dla dzieci”`,
            descr: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
            what: "ubrania, meble, zabawki",
            category: "fundation"
        },
        {
            organization: `Fundacja “Bez domu”`,
            descr: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
            what: "ubrania, jedzenie, ciepłe koce",
            category: "fundation"
        },
        {
            organization: `Fundacja "Lorem Ipsum 1"`,
            descr: "lorem",
            what: "ipsum",
            category: "fundation"
        },
        {
            organization: `Fundacja "Lorem Ipsum 2"`,
            descr: "lorem",
            what: "ipsum",
            category: "fundation"
        },
        {
            organization: `Fundacja "Lorem Ipsum 3"`,
            descr: "lorem",
            what: "ipsum",
            category: "fundation"
        },
        {
            organization: `Fundacja "Lorem Ipsum 4"`,
            descr: "lorem",
            what: "ipsum",
            category: "fundation"
        },
        {
            organization: `Fundacja "Lorem Ipsum 5"`,
            descr: "lorem",
            what: "ipsum",
            category: "fundation"
        },
        {
            organization: `Fundacja "Lorem Ipsum 6"`,
            descr: "lorem",
            what: "ipsum",
            category: "fundation"
        },
        {
            organization: `Organizacja "Lorem Ipsum 1"`,
            descr: "lorem",
            what: "ipsum",
            category: "organization"
        },
        {
            organization: `Organizacja "Lorem Ipsum 2"`,
            descr: "lorem",
            what: "ipsum",
            category: "organization"
        },
        {
            organization: `Organizacja "Lorem Ipsum 3"`,
            descr: "lorem",
            what: "ipsum",
            category: "organization"
        },
        {
            organization: `Organizacja "Lorem Ipsum 4"`,
            descr: "lorem",
            what: "ipsum",
            category: "organization"
        },
        {
            organization: `Organizacja "Lorem Ipsum 5"`,
            descr: "lorem",
            what: "ipsum",
            category: "organization"
        },
        {
            organization: `Organizacja "Lorem Ipsum 6"`,
            descr: "lorem",
            what: "ipsum",
            category: "organization"
        },
        {
            organization: `Zbiórka "Lorem Ipsum 1"`,
            descr: "lorem",
            what: "ipsum",
            category: "local"
        },
        {
            organization: `Zbiórka "Lorem Ipsum 2"`,
            descr: "lorem",
            what: "ipsum",
            category: "local"
        },
        {
            organization: `Zbiórka "Lorem Ipsum 3"`,
            descr: "lorem",
            what: "ipsum",
            category: "local"
        },
    ]

    const itemsPerPage = 3;
    const endOffset = itemOffset + itemsPerPage;
    const itemsCategory = items.filter((item) => item.category === category);
    const currentItems = itemsCategory.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(itemsCategory.length / itemsPerPage);
    

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % itemsCategory.length;
        setItemOffset(newOffset);
      };

    

    console.log(category);


    return (
        <section className="help" id="organizations">
            <h2 className="help__header">Komu pomagamy?</h2>
            <div className="help__decoration"><img className="help__img" src={decoration}  alt="decoration"/></div>

            <div className="help__categories">
                <input className="help__categories--cat" type="radio" id="fundation" name="category" value="fundation" checked={category === "fundation"} onChange={(e) => {setCategory(e.target.value)
                setStartPage(0)}}/><label className="help__categories--label" htmlFor="fundation">Fundacjom</label>

                <input className="help__categories--cat" type="radio" id="organization" name="category" value="organization" checked={category === "organization"} onChange={(e) => {setCategory(e.target.value)
                setStartPage(0)}}/><label className="help__categories--label" htmlFor="organization">Organizacjom <br/>pozarządowym</label>

                <input className="help__categories--cat" type="radio" id="local" name="category" value="local" checked={category === "local"} onChange={(e) => {setCategory(e.target.value)
                setStartPage(0)}}/><label className="help__categories--label" htmlFor="local">Lokalnym <br/>zbiórkom</label>
            </div>

            <p className="help__para">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

            <div className="list">

            {currentItems.map((item) => 
            <div className="list__element">
             <div className="list__element--left">
                <div className="list__name">{item.organization}</div>
                <div className="list__descr">{item.descr}</div>
             </div>
             <div className="list__element--right">
                <div lassName="list__what">{item.what}</div>
             </div>
            </div>)}
            
            </div>

            {itemsCategory.length > 3 && 
            <ReactPaginate 
                className="pagination"
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                activeClassName="active"
                initialPage={startPage}
            />}

        </section>
    );
}

export default HomeHelp;