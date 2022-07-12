import "./Pagination.scss"

const Pagination = (props) => {
    return (
        <div className="pagination-btn-group">
            <button className="btn btn-primary" onClick={() => props.setPage(prev => prev - 1)} disabled={props.page <= 1}>«</button>
            
            {props.page - 2 >= 1 && props.page === props.maxPage && 
                <button onClick={() => props.setPage(prev => prev + 1)}>{props.page - 2}</button>}
            {props.page - 1 >= 1 && 
                <button onClick={() => props.setPage(prev => prev - 1)}>{props.page - 1}</button>}
            {props.page !== 0 && 
                <button className="current-page-btn">{props.page}</button>}
            {props.page + 1 <= props.maxPage && 
                <button onClick={() => props.setPage(prev => prev + 1)}>{props.page + 1}</button>}
            {props.page + 2 <= props.maxPage && props.page === 1 && 
                <button onClick={() => props.setPage(prev => prev + 1)}>{props.page + 2}</button>}
            
            <button className="btn btn-primary" onClick={() => props.setPage(prev => prev + 1)} disabled={props.page + 1 > props.maxPage}>»</button>
        </div>
    )  
}

export default Pagination