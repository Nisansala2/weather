import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';


// Sample cities data. Replace this with data from an API.
const cities = [
  { name: 'Denver International Airport', country: 'Denver, Colorado 80249' },
  { name: 'Denizli', country: 'Denizli, Denizli TR' },
  { name: 'Denver', country: 'Denver, CO US' },
  { name: 'Denpasar', country: 'Denpasar, Bali ID' },
  { name: 'Dental', country: 'Sri Lanka' }
];

const Autocomplete = ({ onCitySelected }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : cities.filter(city =>
      city.name.toLowerCase().includes(inputValue)
    );
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name} <br />
      <small>{suggestion.country}</small>
    </div>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    onCitySelected(suggestion.name);
  };

  const inputProps = {
    placeholder: 'Enter city name',
    value,
    onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
};

export default Autocomplete;
