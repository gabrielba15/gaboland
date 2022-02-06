/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { LargeProjectCard } from 'components/cards/project-card';

type ProjectItemProps = {
	node: {
		color: string;
		title: string;
		slug: string;
		service: string;
		client: string;
		cover: {
			childImageSharp: {
				gatsbyImageData: IGatsbyImageData;
			};
		};
	};
	style: any;
	eager?: boolean;
};

const ProjectItem = ({ node, style, eager }: ProjectItemProps) => (
	<animated.div>
		<div
			sx={{
				a: {
					width: 500,
					transition: `all 0.3s ease-in-out`,
					textDecoration: `none`,
					'&:hover': {
						textDecoration: `none`,
					},
				},
			}}
		>
			<Link to={node.slug} aria-label={`View detail page of ${node.title}`}>
				<LargeProjectCard title={node.title} />
			</Link>
		</div>
	</animated.div>
);

export default ProjectItem;
