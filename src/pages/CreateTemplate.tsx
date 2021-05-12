import {FC} from 'react';
import {Grid} from '@material-ui/core';

export interface CreateTemplateProps {}

const CreateTemplate: FC<CreateTemplateProps> = () => {
  return (
    <Grid container className="py-10">
      <Grid item xs={3} className="pr-7">
        {/* <SideBar /> */}
      </Grid>
      <Grid item xs={9} className="pr-7">
        <h1>Hello World</h1>
      </Grid>
    </Grid>
  );
};

export default CreateTemplate;
