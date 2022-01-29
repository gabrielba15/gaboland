import * as React from 'react';
// Hooks!
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
// Components!
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
import Footer from '@lekoarts/gatsby-theme-emma/src/components/footer';
import Seo from '@lekoarts/gatsby-theme-emma/src/components/seo';

type LayoutProps = {
	children: React.ReactNode;
	header: { title: string };
};

const Layout = ({ children, header }: LayoutProps) => {
	const meta = useSiteMetadata();
	const nav = useNavigation();

	return (
		<React.Fragment>
			<Seo />
			<Header meta={meta} nav={nav} title={header.title} />
			{children}
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
