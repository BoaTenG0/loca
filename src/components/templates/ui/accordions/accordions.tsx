'use client'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { IoChevronUpOutline } from 'react-icons/io5'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionItemProps {
  title: string
  content?: string
  disabled?: boolean
}

export const AccordionTemplateNew: React.FC<AccordionItemProps> = ({ title, content, disabled = false }) => {
  return (
    <Accordion
      disabled={disabled}
      sx={{
        border: 'none',
        boxShadow: 'none',
        marginBottom: 0,
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<IoChevronUpOutline />}
        aria-controls={`${title.toLowerCase().replace(/\s+/g, '-')}-content`}
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-header`}
        sx={{
          mb: 0,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </AccordionSummary>
      {content && (
        <AccordionDetails
          sx={{
            mt: -2.5,
            mb: -2,
            '& .MuiTypography-root': {
              textAlign: 'left',
              fontSize: '0.875rem',
              color: 'gray',
            },
          }}
        >
          <Typography>{content}</Typography>
        </AccordionDetails>
      )}
    </Accordion>
  )
}

// export const AccordionComponent: React.FC = () => {
//   return (
//     <div>
//       <AccordionItem
//         title="Accordion 1"
//         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
//       />
//       <AccordionItem
//         title="Accordion 2"
//         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
//       />
//       <AccordionItem
//         title="Disabled Accordion"
//         disabled={true}
//       />
//     </div>
//   );
// };

// export default AccordionComponent;
