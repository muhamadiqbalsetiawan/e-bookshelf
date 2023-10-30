import React from "react";
import Books from "./Books";
import CallUseForm from "./CallUsform";

class Main extends React.Component{
    render() {
        const listBuku = [
            {
                name:"Doa Sehari-hari",
                image: "./assets/doa.jpg",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Sejarah 25 Nabi",
                image: "./assets/sejarah-nabi.jpg",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Praktek Ibadah",
                image: "./assets/prakte-ibadah.jpg",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Juz Amma",
                image: "./assets/juz-amma.jpg",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
        ]

        return(
            <div className="main-conten">
                <div className="main">
                    <div className="sapa-content">
                        <h2>Hello Studies, Welcome to Quemen Library</h2>
                        <a>There are various types of books available from textbooks, novels, comics, stories, and many more. available for many people from small children to adults. here everyone can get various kinds of knowledge needed.</a>
                    </div>
                    <div className="buku-content">
                        <h3>List Buku-Buku</h3>
                        <div className="list-buku">
                            {listBuku.map((buku)=>{
                                return(
                                    <Books name={buku.name} image={buku.image} introduction={buku.introduction}/>
                                );
                            })}

                        </div>

                    </div>
                </div>
                <div className="calluse-container">
                    <h3>Hubungi Kami</h3>
                    <CallUseForm/>
                </div>

            </div>
        );
    }
}

export default Main;