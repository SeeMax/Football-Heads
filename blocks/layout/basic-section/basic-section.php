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
$id = 'basic-section-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'basic-section';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div class="content">
    <div class="basic-section-left-side c-width-48">
      <?php if( have_rows('left_side') ): while( have_rows('left_side') ) : the_row();
        $image = get_sub_field('image');
        $headline = get_sub_field('headline');
        $subheadline = get_sub_field('subheadline');
        $body = get_sub_field('body');
        if( have_rows('button') ): while( have_rows('button') ) : the_row();
          $btntxt = get_sub_field('btn_txt');
          $btndest = get_sub_field('btn_dest');
        endwhile; endif;
      endwhile; endif;?>  
      <?php if($image):?>
        <img src="<?php echo $image['url'];?>">
        <div class="basic-image-icon">
          <div class="basic-image-icon-inner1"></div>
          <div class="basic-image-icon-inner2"></div>
        </div>
      <?php endif;?>
      <?php if($headline):?>
        <h2 class="head-hero"><?php echo $headline; ?></h2>
      <?php endif;?>
      <?php if($subheadline):?>
        <h3 class="subhead-hero"><?php echo $subheadline; ?></h3>
      <?php endif;?>
      <?php if($body):?>
        <?php echo $body; ?>
      <?php endif;?>
      <?php if($btntxt):?>  
        <div class="seemax-button">
          <span><?php echo $btntxt; ?></span>
          <a href="<?php echo $btndest; ?>" class="c-block-fill"></a>
        </div>
      <?php endif;?> 
    </div> 
    
    <div class="basic-section-right-side c-width-48">
      <?php if( have_rows('right_side') ): while( have_rows('right_side') ) : the_row();
        $image = get_sub_field('image');
        $headline = get_sub_field('headline');
        $subheadline = get_sub_field('subheadline');
        $body = get_sub_field('body');
        if( have_rows('button') ): while( have_rows('button') ) : the_row();
          $btntxt = get_sub_field('btn_txt');
          $btndest = get_sub_field('btn_dest');
        endwhile; endif;
      endwhile; endif;?>  
      <?php if($image):?>
        <img src="<?php echo $image['url'];?>">
        <div class="basic-image-icon">
          <div class="basic-image-icon-inner1"></div>
          <div class="basic-image-icon-inner2"></div>
        </div>
      <?php endif;?>
      <?php if($headline):?>
        <h2 class="head-hero"><?php echo $headline; ?></h2>
      <?php endif;?>
      <?php if($subheadline):?>
        <h3 class="subhead-hero"><?php echo $subheadline; ?></h3>
      <?php endif;?>
      <?php if($body):?>
        <?php echo $body; ?>
      <?php endif;?>
      <?php if($btntxt):?>  
        <div class="seemax-button">
          <span><?php echo $btntxt; ?></span>
          <a href="<?php echo $btndest; ?>" class="c-block-fill"></a>
        </div>
      <?php endif;?> 
    </div> 

  </div>
</section>
