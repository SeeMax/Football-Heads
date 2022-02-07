<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'image-banner-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'image-banner-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$image = get_field('image');
$link = get_field('link');
$headline = get_field('headline');
$subheadline = get_field('subheadline');
?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  
  <div class="content">
    <div class="image-banner-background-image background-image-section c-block-fill" style="background-image:url(<?php echo $image['url'];?>)"></div>
    <div class="image-banner-background-pattern c-block-fill"></div>
    <div class="headline-container">
      <h2><?php echo $headline;?></h2>
    </div>
    <a href="<?php echo $link;?>" class="c-block-fill"></a>
  </div>
</section>
