import React from 'react';
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  state={
    options:[],
    selectedOption:undefined
  }

  handleDeleteOptions=() => {
    this.setState(()=>({options :[]}));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState)=>({
      options:prevState.options.filter((option)=> optionToRemove!==option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState (() => ({
      selectedOption:option
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid item ';
    }
    else if (this.state.options.indexOf(option)>-1){
      return 'Item already exists';
    }
    this.setState((prevState)=>({options:prevState.options.concat(option)}));
  };

  closeModal = () => {
    this.setState(()=>({selectedOption:undefined}));
  };

  componentDidMount() {
    try{
      const json=localStorage.getItem('options');
      const options=JSON.parse(json);
      if(options) {
        this.setState(()=>({ options }));
      }
    }catch(e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.options.length !== this.state.options.length ) {
      const json=JSON.stringify(this.state.options);
      localStorage.setItem('options',json)
      console.log('saving')
    }
  }

  render() {
    const subtitle="Put your life in the hands of a machine";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length>0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              hasOptions={this.state.options.length>0}
            />
            <AddOptions
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default IndecisionApp;
