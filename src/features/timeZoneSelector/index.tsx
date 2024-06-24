import React from 'react';
import { Container, Heading, StyledSelect } from './styled'; // Adjust the import path as needed
import { TIME_ZONES } from '../../constants'; // Assuming this is where your constants are defined

const TimeZoneSelector: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <Heading>Select Time Zone</Heading>
      <StyledSelect onChange={handleChange}>
        {TIME_ZONES.map((zone) => (
          <option key={zone.value} value={zone.value}>
            {zone.label}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default TimeZoneSelector;
