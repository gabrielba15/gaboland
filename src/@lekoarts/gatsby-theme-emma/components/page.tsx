/** @jsx jsx */
import { animated, useSpring, config } from 'react-spring';
import { Container, jsx, Flex, Heading } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
// Components
import Layout from './layout';
import Hero from 'components/hero';
import ToolsCard from 'components/cards/tools-card';
import ParagraphWithIcon from 'components/paragraph-with-icon';
import WorkingOnIt from 'components/working-on-it';
import { NormalCard } from 'components/cards/card';
import ProjectCard, { LargeProjectCard } from 'components/cards/project-card';
import SEO from './seo';

type PageProps = {
	data: {
		page: {
			title: string;
			slug: string;
			excerpt: string;
			body: string;
		};
	};
	[key: string]: any;
};

const components = {
	Hero,
	NormalCard,
	ToolsCard,
	ParagraphWithIcon,
	ProjectCard,
	LargeProjectCard,
	WorkingOnIt,
};

const Page = ({ data: { page } }: PageProps) => {
	const titleProps = useSpring({
		config: config.slow,
		from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
		to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
	});
	const contentProps = useSpring({
		config: config.slow,
		delay: 1000,
		from: { opacity: 0 },
		to: { opacity: 1 },
	});

	return (
		<MDXProvider components={components}>
			<Layout header={{ title: page.title }}>
				<SEO
					title={page.title}
					description={page.excerpt}
					pathname={page.slug}
				/>
				<animated.div
					style={contentProps}
					sx={{
						maxWidth: 800,
						margin: '0 auto',
						padding: '0 24px',
						minHeight: '77.2vh',

						gap: '2rem 1rem',
						justifyContent: 'center',

						display: 'grid',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(366px, auto))',
					}}
				>
					<MDXRenderer>{page.body}</MDXRenderer>
				</animated.div>
			</Layout>
		</MDXProvider>
	);
};

export default Page;
