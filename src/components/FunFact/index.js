import React from 'react'


const FunFact = (props) => {

    const funfact = [
        {
            title: '20+',
            subTitle: 'Successful Investments',
        },
        {
            title: '10+',
            subTitle: 'Expert Consultants',
        },
        {
            title: '98%',
            subTitle: 'Partner Satisfaction',
        },
        {
            title: '10+',
            subTitle: 'Years of Experience',
        },

    ]


    return (
        <section className={`wpo-fun-fact-section  ${props.fnClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12" >
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;