import PropTypes from 'prop-types';
import { SectionWrapp } from './SectionStyled';

export const Section = ({ title, children }) => (
  <SectionWrapp>
    <h2>{title}</h2>
    {children}
  </SectionWrapp>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object),
};