// grid - сетка.
// Грид представляет собой пересекающийся набор горизонтальных и вертикальных линий, образующих колонки и строки.
// здесь задаем стиль для каталога, футера и меню (чтобы не один под другим, а колонками)
const menuStyle = {display: 'grid', gridTemplateColumns: '0.8fr 1fr 1.5fr 1.5fr 2fr 2fr'};
const catalogStyle = {display: 'grid', gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'};
const footerStyle = {display: 'grid', gridTemplate: 'repeat(2, 1fr) / repeat(2, 1fr)'}

function App() {
    const arrMenu = ['Home', 'Hotels', 'Apartments', 'Bungalows', 'Rent Water Activities'];
    const footerMenu = ['About us', 'Contact us', 'Policy', 'Terms'];
    const allProperties = [
        {
            id: '1',
            name: 'Hilton',
            description: 'beach front',
            price: 150,
            type: 'Hotel'
        },
        {
            id: '2',
            name: 'Redison',
            description: 'Resort & SPA',
            price: 200,
            type: 'Hotel'
        },
        {
            id: '3',
            name: 'Sheraton',
            description: 'city view',
            price: 210,
            type: 'Hotel'
        },
        {
            id: '4',
            name: 'Marriot',
            description: 'Resort & SPA',
            price: 350,
            type: 'Hotel'
        },
        {
            id: '5',
            name: 'Bahamar',
            description: 'Resort & SPA',
            price: 370,
            type: 'Hotel'
        },
    ];
    const companyAddress = {
        zip: '90210',
        email: 'booking@booking.com',
        address: '124 West end blvd Los Angeles',
        phoneNumber: '+19995553311'
    }
    // вариант, что функция может возвращать html
    const renderCallOrder = () => {
        return(
            <div>
                <input type="number" placeholder='Input your phone number and we`ll call you back'/>
                <button>Order a call</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Booking App</h1>
            <div style={menuStyle}>
                {arrMenu.map(el => <div>{el}</div>)}
            </div>
            <hr/>
            <ol>
                {arrMenu.map(el => <div>{el}</div>)}
            </ol>
            <hr/>
            <h2>Start Your Journey</h2>
            <div style={catalogStyle}>
                {allProperties.map(el => <div>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                    <p>Price: <b>{el.price}</b></p>
                    <button>BOOK</button>
                </div>
                )}
            </div>
            {renderCallOrder()}
            <hr/>
            <div style={footerStyle}>
                <p>{companyAddress.address}</p>
                <p>{companyAddress.zip}</p>
                <p>{companyAddress.email}</p>
                <p>{companyAddress.phoneNumber}</p>
            </div>
            <br/>
            {footerMenu.map(el => <div>{el}</div>)}
        </div>
    );
}

export default App;
