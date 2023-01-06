import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import Select, { components } from 'react-select';
import arrow_down from '../img/arrow-down.png';

export const Location = () => {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Array of all options
  const optionList = [
    { value: "los angeles", label: "Los Angeles" }
  ];

  // Function triggered on selection
  const handleSelect = (data) => {
    if (selectedOptions.length === 0 || !selectedOptions.some((roles) => roles.value === data[0].value)) {
      setSelectedOptions(selectedOptions.concat(data));
    }
  };

  useEffect(() => {
    selectedOptions.length > 0 ? setLocationVisible(true) : setLocationVisible(false);
  }, [selectedOptions]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={arrow_down} />
      </components.DropdownIndicator>
    );
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: "5px 5px",
      gap: "8px",

      width: "1012px",
      height: "48px",

      background: "#F1F4F8",

      /* Field Stroke */
      border: "1px solid #CECECE",
      borderRadius: "16px",

      /* Inside auto layout */
      flex: "none",
      order: "0",
      flexGrow: "0",
    }),
    valueContainer: (base) => ({
      ...base,
      width: "681px",
      height: "28px",

      fontFamily: 'Space Grotesk',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",

      /* or 150% */
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.3px",
      fontFeatureSettings: "'liga' off",

      /* Text/Text - 02 */
      color: "rgba(47, 48, 49, 0.54)",


      /* Inside auto layout */
      flex: "none",
      order: "0",
      flexGrow: "1"
    }),
    indicatorSeparator: (base) => ({
      ...base,
      background: "#F1F4F8"
    })
  };

  return (
    <Form>
      <div className="Location">
        <label>Location</label>
        <div>
          <Select
            styles={customStyles}
            options={optionList}
            components={{ DropdownIndicator }}
            placeholder="Select Location"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isClearable={false}
          />
        </div>
      </div>
    </Form>
    );
  }