import Link from 'next/link';

export default function PlatformProductsList(props) {
  const list = props.list ? [...props.list] : [];
  if (list.length < 6) {
    while (list.length < 6) {
      list.push({id: Math.random()});
    }
  }
  let listItems = [];

  if (list) {
    listItems = list.map((item) => (
      <li className="item" key={item.id}>
        {item.name && (
          <>
            {<img src={item.images} />}
            <h4>{item.name}</h4>
            <a
              target="_blank"
              className="btn btn-primary"
              href={'https://dashboard.stripe.com/test/products/' + item.id}
            >
              Add to cart
            </a>
          </>
        )}
        <style jsx>{`
          .item {
            height: 300px;
            position: relative;

            border: 0;
            border-radius: 4px;
            text-align: center;
          }
          .item h4 {
            margin: 0;
            padding: 0;
            font-size: 14px;
          }

          .item a {
            margin-top: 20px;
          }

          .item img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            object-position: bottom;
            margin-bottom: 20px;
          }
        `}</style>
      </li>
    ));
  }

  return (
    <ul className="products-list">
      {listItems}

      <style jsx>{`
        .products-list {
          list-style: none;
          padding: 0;
          margin: 10px 0 0 0;

          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 30px;
          grid-auto-rows: minmax(100px, auto);
        }

        @media (min-width: 768px) {
          .products-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) { {
          .products-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }        
      `}</style>
    </ul>
  );
}