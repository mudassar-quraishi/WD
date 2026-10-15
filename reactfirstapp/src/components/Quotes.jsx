import React, { useEffect, useState } from 'react'

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState('');

    const getQuotes = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes');

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            setQuotes(data.quotes);
        } catch (requestError) {
            setError(requestError.message);
        }
    };

    useEffect(() => {
        getQuotes();
    }, []);

  return (
    <div className='container'>
        <h2>List of quotes</h2>
        {error && <p className='text-danger'>Unable to load quotes: {error}</p>}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Quote</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody className='table-warning'>
                {quotes.map((row) => (
                    <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.quote}</td>
                    <td>{row.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Quotes