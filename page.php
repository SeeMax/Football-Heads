<?php get_header(); ?>
<main class="page-default">
	<?php while (have_posts()) : the_post(); ?>
		<section class="hero-section">
			<div class="content">		
				<h1><?php the_title();?></h1>
			</div>
		</section>
		<section class="default-section">
			<div class="content">		
				<?php the_content(); ?>
			</div>
		</section>
	<?php endwhile; ?>
</main>
<?php get_footer(); ?>
