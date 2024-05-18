import { Card } from 'react-bootstrap'
import { VariableSizeGrid as Grid } from 'react-window'
import { useGetSuggestsQuery } from '../store/api/gifApi'

const SearchList = ({ searchInput }: { searchInput: string }) => {
  const { data: suggests, error, isLoading } = useGetSuggestsQuery(searchInput)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error....</p>
  }
  return (
    <Grid
      className="List"
      itemData={suggests}
      rowCount={suggests!.length}
      rowHeight={(index) => +suggests![index].images.fixed_height.height + 150}
      columnCount={1}
      columnWidth={(index) => +suggests![index].images.fixed_height.width + 50}
      height={700}
      width={1000}
    >
      {({ rowIndex, style }) => {
        return (
          <Card style={style}>
            <Card.Img
              variant="top"
              src={suggests![rowIndex].images.fixed_height.url}
            />
            <Card.Body>
              <Card.Title>{suggests![rowIndex].title}</Card.Title>
            </Card.Body>
          </Card>
        )
      }}
    </Grid>
  )
}

export default SearchList
