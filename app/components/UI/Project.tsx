import Link from 'next/link';
import classes from './Project.module.scss';
import { ProjectFront } from '@/types/types';
import Image from 'next/image';
import { url } from '@/data/blurDataUrl';

const Project = ({ slug, imageFront, tags, title }: ProjectFront) => {
	const tag = tags.map((tag) => tag).join(', ');

	return (
		<>
			<Link
				href={`/projects/${slug}`}
				className={classes.project}
				prefetch={false}
			>
				<div className={classes.project__image}>
					<Image
						alt=''
						src={imageFront}
						placeholder='blur'
						blurDataURL={url}
						loading='lazy'
						fill={true}
						sizes='(max-width: 960px) 100vw
						, 50vw'
					/>
				</div>

				<div className={classes.project__overlay}>
					<div className={classes.project__desc}>
						<h3 className={classes.project__title}>{title}</h3>
						<div className={classes.project__tech}>
							<p className={classes.project__tags}>{tag}</p>
							<svg className={classes.project__icon}>
								<use xlinkHref='/images/sprite.svg#icon-arrow'></use>
							</svg>
						</div>
						<div className={classes.project__underline}>&nbsp;</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Project;
