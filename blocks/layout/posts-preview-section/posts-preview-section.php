<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $eost_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'posts-preview-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'posts-preview-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="content">
    <h2 class="section-header">Recent News</h2>
    <?php $args = array(
        'posts_per_page' =>3,
        'post_type' => 'post',
        'ignore_sticky_posts' => true,
        );
      ?>
      <?php $wp_query = new WP_Query($args);?>
      <?php while ($wp_query->have_posts()) : $wp_query->the_post();?>
        <?php $post_id = get_the_ID();?>
        <?php $thisDate = get_the_date();?>
        <?php $image = get_field('featured_post_image', $post_id);?>
        <div 
          class="single-post-preview c-width-32 background-image-section"
          style="background-image:url(
              <?php if( $image ):?>
                <?php echo wp_get_attachment_image_url( $image, $size );?>
            <?php else:?>
              <?php echo get_template_directory_uri(); ?>/dist/images/logo-transparent.png
            <?php endif;?>
          );"
        >
          
          <div class="single-post-preview-text">
            <div class="single-post-preview-headline">
              <h3><?php the_title();?></h3>
            </div>
            <span>Read More</span>
          </div>
          <a class="c-block-fill" href="<?php the_permalink();?>"></a>
        </div>
      <?php endwhile; ?>
    <?php wp_reset_query(); ?>
    <div class="all-posts-button-area">
      <div class="seemax-button">
        <span>All News</span>
        <a class="c-block-fill" href="/newsroom/"></a>
      </div>
    </div>
  </div>
</section>
