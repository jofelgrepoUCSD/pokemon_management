import '../index.css';


function SearchResult(props) {

	// From SearchTrainer, This contain the results of search
	const result = props.location.state.detail;

  return (
    <div className="Home">
		<h1 className="result-title">Search Result</h1>
		{result.map((result,index)=>{
			return (
			<div className="result">
				{result}
			</div>
			);
		})}
	 </div>
  ) 
} 

export default SearchResult;
