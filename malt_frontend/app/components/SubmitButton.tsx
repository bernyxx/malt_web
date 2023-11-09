import { Button } from '@mui/material';
import React from 'react';

const SubmitButton = (props: {
  handleSubmit: (arg: any) => any;
  isLoading: boolean;
  text: string;
}) => {
  return (
    <Button
      onClick={(e) => props.handleSubmit(e)}
      variant='outlined'
      disabled={props.isLoading}
    >
      {props.text}
    </Button>
  );
};

export default SubmitButton;
