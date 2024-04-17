import { Helmet } from 'react-helmet-async';

const Seo = (props) => {
  return (
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords}></meta>
        <meta name="author" content={'Lorenzo Giralda'}></meta>
      </Helmet>
  );
}

export default Seo;
