import { Button, Card, Nav } from 'react-bootstrap'
import useHistoryData from '../hooks/history.hook'

const HistoryPage = () => {
  const { currentUrl, onDelete } = useHistoryData()

  return (
    <div className=" flex flex-col items-center gap-5 ">
      <h2 className=" text-4xl my-10 font-medium">История поиска</h2>
      <ul>
        {!currentUrl.length ? <p>Нет истории поиска</p> : null}
        {currentUrl.map((url) => {
          const name = url.split('=')[1]
          return (
            <Card key={url}>
              <Card.Header>{name}</Card.Header>
              <Card.Body>
                <Nav.Link href={url}>
                  <Card.Title>{url}</Card.Title>
                </Nav.Link>
                <Button variant="primary" onClick={() => onDelete(url)}>
                  Удалить
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </ul>
    </div>
  )
}

export default HistoryPage
