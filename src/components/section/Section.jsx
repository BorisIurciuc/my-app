import './section.css'
export default function Section({children, 
    title='undefined'}) {
    return (
        <section className='section'>
            <h5>Section ! {title}</h5>
            {children}
            <p>Вот и все</p>
        </section>
    )
}