// let visibility=false;

// const toggleVisibility=()=>{
//     visibility= !visibility;
//     render();
// };

// const render=()=>{
//     const template=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide Text' : 'Show Text'}</button>
//             { visibility && (<p>Some text</p>)}
//         </div>
//     );
    
//     const appRoot=document.getElementById('app');

//     ReactDOM.render(template,appRoot);
// };

// render();

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility=this.toggleVisibility.bind(this);
        this.state={
            visibility:false
        };
    }
    
    toggleVisibility() {
        this.setState((prevState)=>{
            return {
                visibility:!prevState.visibility
            };
        });
    }

    render() {
        return (
        <div>
            <h1>Visibility APP</h1>
            <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide text' : 'Show text' }</button>
            {this.state.visibility && <p>Some visibile text</p>}
        </div>
        );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));