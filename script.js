/* ==========================
   ELECTRO BADR SCRIPT
========================== */

/* ── GOOGLE SHEETS URL ──────────────── */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzWmgfQM23i-V44Bcc4wR22obmEyseQG0Yn8FMk1SNlzkoihlECK8zmNKRHOF5Tin-w/exec';

/* ── TRANSLATIONS ───────────────────── */
const translations = {
  en: {
    home: 'HOME', shop: 'SHOP', about: 'ABOUT US', contact: 'CONTACT',
    follow_us: 'FOLLOW US',
    hero_badge: 'SINCE 1983 · MOROCCO\'S TRUSTED ELECTRONICS',
    hero_line1: 'Premium', hero_line2: 'Electronics,', hero_line3: 'Delivered to You',
    hero_desc: 'Discover our curated selection of top-tier gadgets — from powerbanks to digital watches. Quality you can trust, cash on delivery.',
    stat_years: 'Years of Trust', stat_products: 'Products', stat_customers: 'Customers',
    hero_btn1: '🛍 Take a Look', hero_btn2: '💬 Contact Us',
    popular_cats: 'Popular Categories', best_sellers: 'Best Sellers', reviews_title: 'Customer Reviews',
    review1: 'Excellent quality and fast delivery.',
    review2: 'Very professional service.',
    review3: 'Will definitely buy again.',
    feat1_title: 'Fast Delivery',      feat1_desc: 'Delivery available across Morocco.',
    feat2_title: 'Cash On Delivery',   feat2_desc: 'Pay only when your order arrives.',
    feat3_title: 'Quality Guaranteed', feat3_desc: 'Carefully selected electronics.',
    feat4_title: '24/7 Support',       feat4_desc: 'Instant assistance via WhatsApp.',
    cat_powerbanks: 'Power Banks', cat_cameras: 'Security Cameras',
    cat_speakers: 'Speakers & Radios', cat_watches: 'Smart Watches',
    cat_beauty: 'Beauty & Care', cat_wallwatch: 'Clocks & Alarms',
    cat_phones: 'Phone Accessories', cat_android: 'Android Boxes',
    shop_title: 'Our Shop', shop_subtitle: 'Browse our premium electronics by category',
    shop_now: 'Shop Now →',
    shop_add_cart: '🛒 Add to Cart', shop_order_now: 'Order Now',
    bs_headphones: 'TVT Solar 4G Cam AOV System', bs_headphones_desc: '360° panoramic view, solar-powered, night vision, 4-camera system.',
    bs_watch: 'SHtel Power Bank 20000mAh SP-24', bs_watch_desc: '22.5W quick charge, Type-C/Lightning cables, digital display.',
    bs_powerbank: 'Philips One Blade 360', bs_powerbank_desc: '3D floating heads, wet/dry use, pop-up trimmer, 60min charge.',
    cart_title: '🛒 Your Cart',
    cart_empty: 'Your cart is empty.', cart_total: 'Total', go_shop: 'Go to Shop →',
    pay_now: 'Pay Now →',
    footer_tagline: 'Premium Electronics Since 1983',
    footer_desc: 'Morocco\'s trusted destination for quality gadgets. Cash on delivery, nationwide.',
    footer_quick_links: 'Quick Links', footer_categories: 'Categories', footer_contact_col: 'Contact Us',
    footer_location: 'Morocco', footer_hours: '24/7 Support via WhatsApp',
    footer_copy: '© 2026 Electro Badr', footer_made: 'Made with ❤️ in Morocco',
    map_find_us: 'Find Us', map_name: 'Electro Badr', map_location: 'Casablanca, Morocco', map_directions: 'Get Directions',
    search_placeholder: 'Search Products...', no_results: 'No products found.',
    mq_morocco: 'Made for Morocco', mq_quality: 'Quality Guaranteed',
mq_cod: 'Cash on Delivery', mq_shipping: 'Fast Nationwide Shipping',
mq_support: '24/7 WhatsApp Support', mq_certified: 'Certified Products Only', mq_since: 'Since 1983',
tl_1983: 'First store opens in Casablanca — a small shop with a big dream of bringing quality tech to Moroccan families.',
tl_1995: 'Expanded product range to include audio equipment, cameras and mobile accessories.',
tl_2010: 'Reached 10,000 customers — became a trusted household name across the Casablanca region.',
tl_2020: 'Added solar cameras, smart watches and cutting-edge tech — embracing the future of electronics.',
tl_2026: 'Launched full online ordering with cash on delivery, nationwide across Morocco. 50,000+ customers and counting.',
tl_tag_founded: 'Founded', tl_tag_expansion: 'Expansion', tl_tag_milestone: 'Milestone',
tl_tag_innovation: 'Innovation', tl_tag_today: 'Today',
ab_more: '+ More',
privacy_text: 'To process and deliver your order, we collect your name, phone number, delivery address, and city. This information is shared exclusively with our delivery partners for the purpose of completing your delivery and is never sold or disclosed to third parties for any other purpose. We do not collect or store any payment information, as all orders are settled in cash upon delivery.',
privacy_warning_text: 'Accepting our Privacy Terms is required to place an order, since completing your delivery depends on the information described above. You are welcome to continue browsing our website without accepting, but the ordering feature will not be available to you.',
privacy_gate_text: 'To complete your order, please accept our Privacy Terms. We collect your name, phone number, delivery address, and city solely to process and deliver your order — this information is never sold.',
privacy_accept: 'Accept',
privacy_no: 'No',
privacy_accept_terms: 'Accept Terms',
privacy_continue_without: 'Continue Without Accepting',
privacy_accept_anyway: 'Accept Anyway',
    /* ── MODAL KEYS ── */
    modal_order_title: 'Your Order', modal_order_sub: 'Review your product and set quantity',
    modal_qty: 'Quantity', modal_purchase: 'Purchase →',
    modal_details_title: 'Your Details', modal_details_sub: 'Fill in your delivery information',
    modal_name: 'Full Name', modal_city: 'City', modal_phone: 'Phone Number',
    modal_city_other: 'Please specify your city',
    modal_email: 'Email (optional)', modal_address: 'Full Address', modal_payment_btn: 'Payment →',
    modal_back: '← Back', modal_payment_title: 'Payment Method',
    modal_payment_sub: 'Your payment method has been selected',
    modal_cod: 'Cash On Delivery', modal_cod_desc: 'Pay when your order arrives at your door — no card needed',
    modal_confirm: 'Confirm Order →', modal_success_title: 'Order Placed!',
    modal_success_msg: 'Thank you! Your order has been received. Our team will contact you shortly.',
    modal_questions: 'Questions? WhatsApp us:', modal_close: 'Close',delivery_fee_label: 'Delivery Fee',
    /* ── ABOUT PAGE ── */
    ab_badge: 'ELECTRO BADR · CASABLANCA',
    ab_hero_title: '40 Years of Trusted Electronics in Morocco',
    ab_hero_sub: 'From a small shop in Casablanca to Morocco\'s most trusted electronics destination — we\'ve been serving families since 1983.',
    ab_stat_years: 'Years of trust', ab_stat_products: 'Products', ab_stat_customers: 'Happy customers',
    ab_who: 'Who We Are',
    ab_story: 'Electro Badr was born in Casablanca in 1983 — a family business built on one simple belief: every Moroccan family deserves access to quality electronics at honest prices.',
    ab_quote: '"We don\'t just sell electronics — we build relationships that last generations."',
    ab_quote_author: '— Badr, Founder',
    ab_journey: 'Our Journey',
    ab_why: 'Why Choose Us',
    ab_val1_title: 'Quality First', ab_val1_desc: 'Every product certified and tested before we sell it. No compromises.',
    ab_val2_title: 'Cash on Delivery', ab_val2_desc: 'Pay only when your order arrives safely at your door.',
    ab_val3_title: 'Fast Shipping', ab_val3_desc: 'Nationwide delivery across all of Morocco — fast and reliable.',
    ab_val4_title: 'Always Here', ab_val4_desc: '24/7 WhatsApp support — real people, real answers, instantly.',
    ab_brands: 'Brands We Carry',
    ab_visit: 'Visit Us',
    ab_cta_title: 'Come see us in Casablanca',
    ab_cta_sub: 'Our team is always ready to help you find the right device. Visit our store or shop online with fast nationwide delivery.',
    ab_shop_btn: '🛍 Shop Now', ab_wa_btn: '💬 WhatsApp Us',
    ab_contact: 'Contact Us',
    ab_phone_label: 'Phone', ab_email_label: 'Email',
    ab_location_label: 'Location', ab_hours_label: 'Support Hours',
    ab_hours_val: '24/7 via WhatsApp',
   


review_write: '✍️ Write a Review', review_name_ph: 'Your name', review_phone_ph: 'Phone used for your order',
review_comment_ph: 'Share your experience with this product', review_submit: 'Submit Review',
review_fill_all: 'Please fill in all fields and select a rating.', review_sending: 'Sending...',
review_photo_too_large: 'Photo is too large (max 5MB).', review_success: 'Thank you! Your review will appear once approved.',
review_not_verified: 'We couldn\'t verify a purchase of this product with that phone number.', review_error: 'Connection error. Please try again.',



    /* ── CONTACT PAGE ── */
    ct_badge: 'GET IN TOUCH',
    ct_hero_title: 'Talk to Electro Badr',
    ct_hero_sub: 'Whether it\'s an order question, delivery inquiry, or just a hello — our team is always here for you, 24/7.',
    ct_pill1: 'WhatsApp · Fastest', ct_pill2: 'Email us', ct_pill3: 'Visit our store', ct_pill4: 'Call us',
    ct_ch1_title: 'WhatsApp', ct_ch1_speed: 'Reply in minutes · 24/7', ct_ch1_btn: 'Chat now',
    ct_ch2_title: 'Email', ct_ch2_speed: 'Reply within 24 hours', ct_ch2_btn: 'Send email',
    ct_ch3_title: 'Visit Us', ct_ch3_val: 'Electro Badr, Casablanca', ct_ch3_speed: 'Come see us in person', ct_ch3_btn: 'Get directions',
    ct_ch4_title: 'Call Us', ct_ch4_speed: 'Available 10am – 7pm', ct_ch4_btn: 'Call now',
    ct_fastest: 'Fastest way to reach us',
    ct_wa_title: 'WhatsApp us directly', ct_wa_sub: 'We reply in minutes — available 24/7', ct_wa_btn: 'Chat now',
    ct_details: 'Contact details',
    ct_phone_label: 'Phone', ct_email_label: 'Email',
    ct_location_label: 'Location', ct_hours_label: 'Support hours', ct_hours_val: '24/7 via WhatsApp',
    ct_send: 'Send a message',
    ct_tab1: 'Order inquiry', ct_tab2: 'Support', ct_tab3: 'Other',
    ct_name_label: 'Full name', ct_phone_field: 'Your phone',
    ct_email_field: 'Your email', ct_subject_label: 'Subject',
    ct_msg_label: 'Message', ct_submit: 'Send Message →',
    ct_faq: 'Common questions',
    ct_faq1_q: 'How long does delivery take?', ct_faq1_a: 'Usually 2–4 business days across all of Morocco.',
    ct_faq2_q: 'Can I pay on delivery?', ct_faq2_a: 'Yes — cash on delivery is available nationwide.',
    ct_faq3_q: 'Can I return a product?', ct_faq3_a: 'Contact us within 7 days of receiving your order.',
    ct_faq4_q: 'Are products guaranteed?', ct_faq4_a: 'Yes — all products are quality-tested and certified.',
    /* ── NEW CATEGORY TITLES ── */
    cat_grooming: 'Men\'s Grooming', cat_calculators: 'Calculators', cat_gadgets: 'Electronic Gadgets',

    /* ── SHOP PRODUCT NAMES & DESCRIPTIONS ── */
    /* ── SHOP PRODUCTS: POWER BANKS ── */
    p_powerbanks_1_name: 'SHtel Power Bank 20000mAh 45W SP-32', p_powerbanks_1_desc: '20000mAh power bank with 45W fast charging, supports laptop charging. Compact size with a built-in Type-C cable and digital display.',
    p_powerbanks_2_name: 'SHtel Power Bank 20000mAh 22.5W SP-24', p_powerbanks_2_desc: '20000mAh power bank with 22.5W quick charge output. Built-in Type-C and Lightning cables, digital percentage display.',
    p_powerbanks_3_name: 'SHtel Power Bank 10000mAh 22.5W SP-90', p_powerbanks_3_desc: '10000mAh power bank with 22.5W fast charging output. Built-in USB-C cable plus USB-C and USB-A ports.',
    p_powerbanks_4_name: 'Konfulon Magnetic Wireless Power Bank 10000mAh M22W', p_powerbanks_4_desc: 'Magnetic wireless power bank with 15W wireless and PD 20W charging. Strong magnetic alignment plus USB and USB-C ports.',
    p_powerbanks_5_name: 'Xiaomi Wireless Power Bank 20000mAh', p_powerbanks_5_desc: '20000mAh power bank with 10W wireless charging. 18W USB-A output plus USB-A and USB-C dual output.',
    p_powerbanks_6_name: 'Oryx CUBE-10 Wireless Power Bank 10000mAh', p_powerbanks_6_desc: 'Compact wired and wireless power bank with 10W wireless charging. 18W Type-C fast charging in a sturdy square design.',
    p_powerbanks_7_name: 'Dinex Portable LED Power Bank 20000mAh X-200', p_powerbanks_7_desc: '20000mAh power bank with a built-in LED light panel. 22.5W fast charging, LCD display, and a built-in carry strap.',
    p_powerbanks_8_name: 'Dinex Mini Power Bank 5000mAh A333', p_powerbanks_8_desc: 'Mini portable power bank with 22.5W output and PD 20W input/output. Switches between Type-C and Lightning, includes a hidden stand.',
    p_powerbanks_9_name: 'Konfulon Outdoor Power Bank 100000mAh A45Q', p_powerbanks_9_desc: 'Ultra-large capacity outdoor power bank with PD 20W and 22.5W fast charging. 6 output ports with an LED display, suitable for tablets and phones.',
    p_powerbanks_10_name: 'Konfulon Power Bank 70000mAh A66Q', p_powerbanks_10_desc: 'High-capacity outdoor power bank with PD 30W and 22.5W fast charging. 7 output ports plus a built-in LED floodlight.',
    /* ── SHOP PRODUCTS: SECURITY CAMERAS ── */
    p_cameras_1_name: 'AI Solar Camera 3-in-1 (SPM-T Series)', p_cameras_1_desc: 'Solar-powered 4K security camera with three lenses in one unit. 4G/WiFi connectivity with 360° coverage and full-color night vision.',
    p_cameras_2_name: 'AOV Smart Solar Camera (4-Lens)', p_cameras_2_desc: 'Solar-powered smart camera with four real lenses and 20MP Ultra HD. Cloud storage, voice intercom, and full color day and night recording.',
    p_cameras_3_name: 'HD Outdoor & Solar Security Camera', p_cameras_3_desc: 'Solar-powered outdoor security camera with 4K Ultra HD and 360° view. Built-in battery, PIR detection, and 4G monitoring for remote areas.',
    p_cameras_4_name: 'Hikvision 3K Color Turret Camera', p_cameras_4_desc: 'Indoor turret camera with 3K resolution and Smart Hybrid Light. Delivers clear color video day and night with wide-angle coverage.',
    p_cameras_5_name: 'Imou Bullet 2E Outdoor Camera', p_cameras_5_desc: 'Outdoor bullet camera with 2K resolution and human detection. Motion-activated spotlight and smart full-color night vision.',
    p_cameras_6_name: 'TP-Link Tapo C212 Pan/Tilt Camera', p_cameras_6_desc: 'Pan/tilt home security camera with 2K resolution and motion tracking. Person detection, two-way audio, and local or cloud storage.',
    p_cameras_7_name: 'Ezviz H8c Smart Home Camera', p_cameras_7_desc: 'Smart home camera with 1080P resolution and 360° panoramic view. Smart tracking and active defense alert the moment motion is detected.',
    p_cameras_8_name: 'Hikvision ColorVu Bullet Camera', p_cameras_8_desc: 'Outdoor bullet camera with ColorVu smart hybrid light technology. Full-color recording day and night, IP67 weatherproof design.',
    p_cameras_9_name: 'Hikvision Turbo HD Bullet Camera', p_cameras_9_desc: 'HD bullet camera with HDTVI technology for clear video output. IP67 weatherproof with EXIR night vision for outdoor use.',
    p_cameras_10_name: 'Imou Cruiser Dual 2 (10MP)', p_cameras_10_desc: 'Dual-lens outdoor security camera with 10MP combined resolution. Human and vehicle detection with red-blue warning lights.',
    /* ── SHOP PRODUCTS: SPEAKERS & RADIOS ── */
    p_speakers_1_name: 'Sing-e Dual 8-Inch Party Speaker', p_speakers_1_desc: 'Dual 8-inch tower speaker with an octagon-style grille. Multicolor RGB lighting rings around each driver. LED time display on top; includes microphone and remote.',
    p_speakers_2_name: 'Sing-e 50W HiFi Speaker ZQS8239', p_speakers_2_desc: 'Dual 8-inch HiFi speaker with 50W output. Built-in DSP and colorful LED ring lighting. 7.4V 5000mAh battery; includes microphone and remote.',
    p_speakers_3_name: 'Sing-e Dual 10-Inch Tower Speaker', p_speakers_3_desc: 'Dual 10-inch tower speaker with deep bass output. Two mic inputs plus a guitar/AUX input for performers. USB, TF card, LED display; runs on AC power.',
    p_speakers_4_name: 'Avcrowns 15-Inch Trolley Speaker CH-8615', p_speakers_4_desc: '15-inch professional battery speaker with 5500W P.M.P.O. Includes two wireless microphones and a remote control. TWS pairing, USB, TF card, FM radio, and LED lights.',
    p_speakers_5_name: 'NNS RGB Retro Radio NS-7069BT', p_speakers_5_desc: 'AM/FM/SW radio with a colorful RGB light strip. Bluetooth with TWS pairing, plus USB and TF playback. Retractable antenna and top carry handle for portability.',
    p_speakers_6_name: 'NNS Ribbed Copper Radio & Clock NS-7211BT', p_speakers_6_desc: 'AM/FM/SW radio with a built-in analog clock. Bluetooth, USB, and TF playback with dedicated transport buttons. Runs on an 18650 battery, includes charging cable.',
    p_speakers_7_name: 'NNS Compact Copper Radio NS-6655BT', p_speakers_7_desc: 'AM/FM/SW radio in a compact copper-trimmed cabinet. Bluetooth with TWS pairing, USB, and TF playback. Runs on an 18650 battery, includes charging cable.',
    p_speakers_8_name: 'NNS Wood Radio & Clock NS-7116BT', p_speakers_8_desc: 'AM/FM/SW radio in a warm wood-tone cabinet. Built-in clock, Bluetooth, USB, and TF playback. Runs on an 18650 battery, includes charging cable.',
    p_speakers_9_name: 'Avcrowns 12-Inch Karaoke Speaker CH-126', p_speakers_9_desc: '12-inch rechargeable karaoke speaker with 10000W P.M.P.O. Includes two wireless microphones and a remote control. USB, TF card, FM radio, AUX, and RGB LED lights.',
    p_speakers_10_name: 'Meier Retro Gramophone Speaker', p_speakers_10_desc: 'Retro gramophone-style speaker with Bluetooth 5.4 connectivity. Plays FM radio, USB, TF card, or AUX input. Rechargeable battery; USB and AUX cables included.',
    /* ── SHOP PRODUCTS: SMART WATCHES ── */
    p_watches_1_name: 'Smartbarry C90 MAX (4G Ultra Watch)', p_watches_1_desc: '4G smartwatch with a 2.2-inch large screen and full HD dual camera. Magnetic charging with support for 3 network carriers.',
    p_watches_2_name: 'Riversong Motive 10 GT', p_watches_2_desc: 'GPS smartwatch with a 1.43-inch AMOLED display and multi-satellite positioning. 3 ATM water resistance, includes an additional magnetic strap.',
    p_watches_3_name: 'Smartbarry C006pro Kids Watch', p_watches_3_desc: '5G kids smartwatch with a removable 2.01-inch screen and HD camera. IP67 waterproof with LBS location, video calling, and voice chat.',
    p_watches_4_name: 'Black Shark A3', p_watches_4_desc: 'Smartwatch with a 1.53-inch HD display and up to 14 days of battery life. Tracks fitness metrics with a durable, everyday design.',
    p_watches_5_name: 'Kieslect Kr3', p_watches_5_desc: 'Smartwatch with a stainless steel bezel and dual-band six-satellite GPS. AI-powered watch face generation creates custom designs.',
    p_watches_6_name: 'Kieslect Elite2', p_watches_6_desc: 'Smartwatch with a beveled ceramic bezel and dual-band GPS with route navigation. Built-in online AI voice assistant for hands-free control.',
    p_watches_7_name: 'Mibro Lite3 Pro', p_watches_7_desc: 'GPS smartwatch with an AMOLED display and genuine leather dual-strap set. Tracks heart rate, sleep, and hydration throughout the day.',
    p_watches_8_name: 'Riversong Motive 6 Pro', p_watches_8_desc: 'Smartwatch with a 1.83-inch full touch display and Bluetooth calling. Over 100 sport modes plus blood oxygen monitoring.',
    p_watches_9_name: 'Kieslect Elfin', p_watches_9_desc: 'Ultra-thin 6mm smartwatch with a 1.32-inch HD AMOLED display. AI-powered, customizable watch faces for a personal look.',
    p_watches_10_name: 'Kieslect Lora 3', p_watches_10_desc: 'Ultra-thin metal smartwatch with a fashion-forward design for everyday wear. 24-hour health monitoring with one-touch Bluetooth calling.',
    /* ── SHOP PRODUCTS: BEAUTY & CARE ── */
    p_beauty_1_name: 'Braun Silk-épil 5 SensoSmart Epilator', p_beauty_1_desc: 'Wet and dry epilator with SensoSmart technology for gentle hair removal. Extra soft epilation keeps skin smooth for up to 4 weeks, includes 2 extra attachments.',
    p_beauty_2_name: 'Sokany Ceramic Hair Straightener SK-993', p_beauty_2_desc: 'Wet and dry hair straightener with ceramic and nano silver plates. Heats up to 750°F for professional salon-style results.',
    p_beauty_3_name: 'DSP Steam Lustre Styler 10242', p_beauty_3_desc: 'Steam hair straightener with aluminum plates for smooth, glossy results. Digital LED display with protein & keratin infusion in a single pass.',
    p_beauty_4_name: 'Enzo Professional One-Step Volumiser PLUS', p_beauty_4_desc: 'Hot air styling brush that dries and volumizes hair in one step. Multiple heat settings with a cool shot to lock in your style.',
    p_beauty_5_name: 'Enzo Professional 2-in-1 Magic Brush', p_beauty_5_desc: 'Dries and straightens hair at the same time with a rotating brush design. Comes with a travel case for easy storage.',
    p_beauty_6_name: 'BaByliss 19mm Curling Tong', p_beauty_6_desc: '19mm barrel curling iron for long-lasting, defined curls and waves. Controlled heat up to 210°C for optimum styling.',
    /* ── SHOP PRODUCTS: MEN'S GROOMING ── */
    p_grooming_1_name: 'Kemei 1677 Beard Trimmer', p_grooming_1_desc: 'Precision beard trimmer with 0-7mm length settings. Self-sharpening blades stay sharp with regular use. USB-C charging delivers up to 4 hours of runtime.',
    p_grooming_2_name: 'Philips One Blade 360', p_grooming_2_desc: 'Rotary shaver with 3D floating heads for a close shave. Works wet or dry, with a pop-up trimmer for detailing. Single charge delivers up to 60 minutes of use.',
    p_grooming_3_name: 'Oraimo Electric Shaver', p_grooming_3_desc: 'Rotary shaving heads glide smoothly for a close shave. Works wet or dry, with a pop-up trimmer for sideburns and mustache. Charges via USB-C for easy, cable-free power-ups.',
    p_grooming_4_name: 'Braun Hair Clipper Set', p_grooming_4_desc: 'Hair clipper set with a durable stainless steel blade. Includes 4 guide combs for different cutting lengths. USB-C charging and a low-noise motor for everyday use.',
        p_grooming_5_name: 'Kemei KM-320B Body Hair Trimmer', p_grooming_5_desc: 'Body hair trimmer with a durable carbon steel cutter for sharp, long-lasting performance. IPX4 waterproof design makes it easy to clean after use. Comes with a guide comb, cleaning brush, and USB charging cable.',
    p_grooming_6_name: 'Kemei KM-8536 Hair Clipper & Trimmer Set', p_grooming_6_desc: 'Professional 2-piece grooming set with a hair clipper and hair trimmer, both running at 9000RPM. Ceramic coated blades with an LCD display showing battery level. Up to 240 minutes of runtime on a full charge.',
    p_grooming_7_name: 'Kemei KM-2024 Foil Shaver', p_grooming_7_desc: 'Classic reciprocating foil shaver with a double foil head for a sharp, close shave. Swing head design pivots 12° for smooth contouring. IPX4 waterproof with USB charging and a travel lock for safe packing.',
    p_grooming_8_name: 'Philips OneBlade Intimate Trimmer', p_grooming_8_desc: 'Intimate area shaver and trimmer with a SkinProtect blade designed for extra gentleness. Includes a trimming comb for length control and an exfoliating glove for smoother results.',
    p_grooming_9_name: 'Kemei KM-277 3-in-1 Grooming Kit', p_grooming_9_desc: '3-in-1 grooming kit covering hair, face, and body in one device. Includes a nose and ear trimmer attachment plus a body shaving head. USB rechargeable with a professional dual-use blade.',
    /* ── SHOP PRODUCTS: CLOCKS & ALARMS ── */
    p_wallwatch_1_name: 'Rhythm Quartz Alarm Clock (Gold)', p_wallwatch_1_desc: 'Quartz alarm clock with glow-in-the-dark numbers and hands. Compact bedside design with a simple on/off alarm switch.',
    p_wallwatch_2_name: 'Rhythm Quartz Alarm Clock (Black)', p_wallwatch_2_desc: 'Quartz alarm clock with glow-in-the-dark numbers and hands. Compact bedside design with a simple on/off alarm switch.',
    p_wallwatch_3_name: 'Rhythm Alarm Clock (Blue)', p_wallwatch_3_desc: 'Compact analog alarm clock with a clear white dial. Simple, reliable quartz movement for everyday bedside use.',
    p_wallwatch_4_name: 'Silent Scanning Alarm Clock 3567', p_wallwatch_4_desc: 'Analog alarm clock with silent scanning movement, no ticking noise. Two-tone chord alarm and a built-in night light.',
    p_wallwatch_5_name: 'LED Digital Clock GS-5308', p_wallwatch_5_desc: 'Digital LED clock with large, easy-to-read numbers. Built-in alarm with AM/PM indicator.',
    /* ── SHOP PRODUCTS: PHONE ACCESSORIES ── */
    p_phones_1_name: 'DINEX 50W type C Fast Charger', p_phones_1_desc: '50W fast charger with multiple charging options. Smart technology ensures safe charging. Perfect for powering multiple devices.',
    p_phones_2_name: 'Dinex Data Cable 100W 3m', p_phones_2_desc: 'High-speed 100W USB-C charging cable. Durable design for long-lasting use. Ideal for phones, tablets, and laptops.',
    p_phones_3_name: 'Dinex 20w Fast Charger lightning', p_phones_3_desc: '20W fast charger with Lightning cable included. Compact design for home or travel. Safe and reliable everyday charging.',
    p_phones_4_name: 'Dinex Car Phone Holder', p_phones_4_desc: 'Adjustable phone holder with 360° rotation. Provides a secure and stable grip. Great for driving and hands-free use.',
    p_phones_5_name: 'SHtel type C CABLE 3.4A', p_phones_5_desc: 'Fast 3.4A charging with reliable data transfer. Durable design built for everyday use. Compatible with most USB-C devices.',
    p_phones_6_name: 'Dinex Fast Charging Cable 3.0A', p_phones_6_desc: 'Durable Lightning cable for charging and syncing. Supports fast and stable performance. Designed for Apple devices.',
    p_phones_7_name: 'Xiaomi Fast charger 120W', p_phones_7_desc: 'Ultra-fast 120W GaN charger with compact design. Delivers powerful and efficient charging. Perfect for compatible USB-C devices.',
    p_phones_8_name: 'Oraimo lightning charger 20w', p_phones_8_desc: 'Reliable 24W charger with charging cable included. Fast, safe, and efficient power delivery. Ideal for daily charging needs.',
    p_phones_9_name: 'Dinex 4OW type C adapter', p_phones_9_desc: 'Compact 40W fast charger for everyday use. Delivers safe and stable charging performance. Compatible with USB-C devices.',
    p_phones_10_name: 'Plokama tripod and selfie stick', p_phones_10_desc: 'Stable and lightweight tripod for photos and videos. Adjustable height with a 360° rotating head. Perfect for cameras and smartphones.',
    /* ── SHOP PRODUCTS: ANDROID BOXES ── */
    p_android_1_name: 'D-Plus D96 AndroidTV Box', p_android_1_desc: 'Android 14 TV box with 8K Ultra HD output and Wi-Fi 6. Built-in Google Assistant with Netflix, YouTube, and Prime Video support.',
    p_android_2_name: 'Xiaomi Smart TV Stick 4K', p_android_2_desc: 'Compact 4K Android TV stick with Google Assistant built in. Comes with Netflix, Prime Video, and YouTube preinstalled.',
    p_android_3_name: 'Xiaomi TV Box S (3rd Gen)', p_android_3_desc: 'Google TV box with 4K Ultra-HD output and Chromecast built in. Includes Netflix, Prime Video, and Google Play access.',
    p_android_4_name: 'Senic H96 Max Android Box', p_android_4_desc: 'Android 11 TV box with 4K HDR Ultra HD output. Compact design with a simple remote control included.',
    p_android_5_name: 'Vectron VBox Alpha', p_android_5_desc: 'Android 12 TV box with 5G Wi-Fi and a quad-core Allwinner H313 chip. Delivers 4K Ultra HD with Netflix, YouTube, and Prime Video.',
    p_android_6_name: 'Senic X98Q Android Box', p_android_6_desc: 'Android 12 TV box with 8K Ultra HD output. Dual USB 3.0 ports plus a TF card slot for storage.',
    p_android_7_name: 'Tanix A3 Android Box', p_android_7_desc: 'Android 11 TV box with 4K Ultra HD and HDR support. Dual-band 2.4G/5G Wi-Fi with a quad-core processor.',
    p_android_8_name: 'Echolink S400B Android Box', p_android_8_desc: '4K Ultra HD Android TV box with Google Assistant built in. Includes Netflix, Disney+, HBO Max, and Plex support.',
    /* ── SHOP PRODUCTS: CALCULATORS ── */
    p_calculators_1_name: 'Texas Instruments TI-Nspire CX II-T CAS', p_calculators_1_desc: 'Graphing calculator with CAS (Computer Algebra System) and color display. Runs Python, approved for A-Level and university exams.',
    p_calculators_2_name: 'NumWorks Graphing Calculator', p_calculators_2_desc: 'Graphing calculator with exam mode and a built-in Python app. Color touchscreen display, designed by a French company.',
    p_calculators_3_name: 'Casio Graph Math+ CLASSW40', p_calculators_3_desc: 'Graphing calculator with exam mode and Python support. Color display for lycée and university, 3-year warranty.',
    p_calculators_4_name: 'Casio fx-991ES PLUS (2nd Edition)', p_calculators_4_desc: 'Scientific calculator with 417 functions and natural textbook display. Solar and battery powered, non-programmable.',
    p_calculators_5_name: 'Deli D991ES PLUS Scientific Calculator', p_calculators_5_desc: 'Scientific calculator with 417 functions and textbook-style display. Solar and battery powered, 3-year guarantee.',
    p_calculators_6_name: 'Casio fx-82ES PLUS (2nd Edition)', p_calculators_6_desc: 'Scientific calculator with 252 functions and natural textbook display. Battery powered (AAA), non-programmable.',
    p_calculators_7_name: 'Casio fx-92 Collège ClassWiz', p_calculators_7_desc: 'Scientific calculator with 417 functions for collège and lycée students. High-resolution display, approved for French exams.',
    /* ── SHOP PRODUCTS: ELECTRONIC GADGETS ── */
    p_gadgets_1_name: '360° Sports Armband', p_gadgets_1_desc: '360° adjustable sports armband for phones 4–7 inches. Double-lock secure fit, stretchy comfortable strap.',
    p_gadgets_2_name: 'Aerbes 400W Solar LED Flood Light', p_gadgets_2_desc: '400W solar LED flood light with a detachable solar panel. IP67 waterproof with wireless remote control.',
    p_gadgets_3_name: 'Electronic Arm Blood Pressure Monitor', p_gadgets_3_desc: 'Arm-style blood pressure monitor with intelligent measurement. Displays systolic, diastolic, and pulse, with 120-reading memory.',
    p_gadgets_4_name: 'LED Flashlight Set (2-Pack)', p_gadgets_4_desc: 'Set of 2 LED flashlights with 1200 lumens and zoom. USB rechargeable via 18650 batteries, IPX4 water-resistant.',
    p_gadgets_5_name: 'AI Tracking Gimbal Stabilizer Q625', p_gadgets_5_desc: 'AI-tracking gimbal stabilizer with automatic face tracking. 360° rotation, auto-balance, and tripod support.',
    p_gadgets_6_name: 'TL16 Clip-On Phone Cooling Fan', p_gadgets_6_desc: 'Clip-on phone cooling fan for fast heat dissipation. Quiet operation with colorful RGB lighting.',
    p_gadgets_7_name: 'DuraM RGB Light-Up Bluetooth Speaker', p_gadgets_7_desc: 'Portable Bluetooth speaker with RGB light-up design. Strong bass and long playback time.',
    p_gadgets_8_name: 'Celet Smart Fitness Bracelet', p_gadgets_8_desc: 'Smart bracelet tracking heart rate, sleep, and steps. Sleek mesh band in black, gold, or silver.',
    p_gadgets_9_name: 'SUITU Handheld Vacuum Cleaner', p_gadgets_9_desc: 'Compact cordless handheld vacuum with 6000Pa suction. Type-C fast charging for car or home.',
    p_gadgets_10_name: 'Intelli System Wrist Blood Pressure Monitor', p_gadgets_10_desc: 'Wrist blood pressure monitor with intelligent measurement. Memory record, two-user mode, voice broadcast.',
  },
  fr: {
    home: 'ACCUEIL', shop: 'BOUTIQUE', about: 'À PROPOS', contact: 'CONTACT',
    follow_us: 'SUIVEZ-NOUS',
    hero_badge: 'DEPUIS 1983 · ÉLECTRONIQUE DE CONFIANCE AU MAROC',
    hero_line1: 'Électronique', hero_line2: 'Premium,', hero_line3: 'Livré Chez Vous',
    hero_desc: 'Découvrez notre sélection de gadgets haut de gamme — des powerbanks aux montres connectées. Qualité garantie, paiement à la livraison.',
    stat_years: 'Ans de Confiance', stat_products: 'Produits', stat_customers: 'Clients',
    hero_btn1: '🛍 Voir les Produits', hero_btn2: '💬 Nous Contacter',
    popular_cats: 'Catégories Populaires', best_sellers: 'Meilleures Ventes', reviews_title: 'Avis Clients',
    review1: 'Excellente qualité et livraison rapide.',
    review2: 'Service très professionnel.',
    review3: 'Je rachèterai certainement.',
    feat1_title: 'Livraison Rapide',        feat1_desc: 'Livraison disponible dans tout le Maroc.',
    feat2_title: 'Paiement à la Livraison', feat2_desc: 'Payez uniquement à la réception.',
    feat3_title: 'Qualité Garantie',        feat3_desc: 'Électronique soigneusement sélectionné.',
    feat4_title: 'Support 24/7',            feat4_desc: 'Assistance instantanée via WhatsApp.',
    cat_powerbanks: 'Powerbanks', cat_cameras: 'Caméras de Sécurité',
    cat_speakers: 'Enceintes & Radios', cat_watches: 'Montres Connectées',
    cat_beauty: 'Beauté & Soin', cat_wallwatch: 'Horloges & Alarmes',
    cat_phones: 'Accessoires Téléphone', cat_android: 'Boîtiers Android',
    shop_title: 'Notre Boutique', shop_subtitle: 'Parcourez nos électroniques par catégorie',delivery_fee_label: 'Frais de Livraison',
    shop_now: 'Voir →',
    shop_add_cart: '🛒 Ajouter au Panier', shop_order_now: 'Commander',
    bs_headphones: 'TVT Solar 4G Cam AOV System', bs_headphones_desc: 'Vue panoramique à 360°, alimentation solaire, vision nocturne, système à 4 caméras.',
    bs_watch: 'SHtel Power Bank 20000mAh SP-24', bs_watch_desc: 'Charge rapide 22.5W, câbles Type-C/Lightning, écran numérique.',
    bs_powerbank: 'Philips One Blade 360', bs_powerbank_desc: 'Têtes flottantes 3D, utilisation à sec ou humide, tondeuse escamotable, charge de 60 min.',
    cart_title: '🛒 Votre Panier',
    cart_empty: 'Votre panier est vide.', cart_total: 'Total', go_shop: 'Aller à la Boutique →',
    pay_now: 'Payer Maintenant →',
    footer_tagline: 'Électronique Premium Depuis 1983',
    footer_desc: 'La destination de confiance pour vos gadgets de qualité. Paiement à la livraison, partout au Maroc.',
    footer_quick_links: 'Liens Rapides', footer_categories: 'Catégories', footer_contact_col: 'Contactez-Nous',
    footer_location: 'Maroc', footer_hours: 'Support 24/7 via WhatsApp',
    footer_copy: '© 2026 Electro Badr', footer_made: 'Fait avec ❤️ au Maroc',
    map_find_us: 'Nous Trouver', map_name: 'Electro Badr', map_location: 'Casablanca, Maroc', map_directions: 'Itinéraire',
    search_placeholder: 'Rechercher...', no_results: 'Aucun produit trouvé.',
    mq_morocco: 'Fait pour le Maroc', mq_quality: 'Qualité Garantie',
mq_cod: 'Paiement à la Livraison', mq_shipping: 'Livraison Nationale Rapide',
mq_support: 'Support WhatsApp 24/7', mq_certified: 'Produits Certifiés Uniquement', mq_since: 'Depuis 1983',
tl_1883: 'Fondation d\'Electro Badr à Casablanca — une petite maison horlogère née d\'une passion pour les montres de haute qualité.',
tl_1995: 'Gamme élargie pour inclure l\'audio, les caméras et les accessoires mobiles.',
tl_2014: 'Ouverture d\'Electro Badr 2 — une succursale entièrement dédiée à l\'électronique grand public.',
tl_2022: 'Lancement de Badr Luxury — notre ligne dédiée aux montres et accessoires de luxe originaux.',
tl_2026: 'Lancement des commandes en ligne avec paiement à la livraison partout au Maroc.',
tl_tag_founded: 'Fondé', tl_tag_expansion: 'Expansion', tl_tag_milestone: 'Étape Clé',
tl_tag_innovation: 'Innovation', tl_tag_today: 'Aujourd\'hui',
ab_more: '+ Plus',
privacy_text: 'Afin de traiter et de livrer votre commande, nous collectons votre nom, votre numéro de téléphone, votre adresse de livraison et votre ville. Ces informations sont partagées exclusivement avec nos partenaires de livraison dans le but d\'assurer votre livraison, et ne sont jamais vendues ni divulguées à des tiers à d\'autres fins. Nous ne collectons ni ne conservons aucune information de paiement, l\'ensemble des commandes étant réglées en espèces à la livraison.',
privacy_warning_text: 'L\'acceptation de nos Conditions de Confidentialité est nécessaire pour passer une commande, la réalisation de votre livraison dépendant des informations décrites ci-dessus. Vous êtes libre de continuer à parcourir notre site sans accepter, mais la fonction de commande ne vous sera pas accessible.',
privacy_gate_text: 'Pour finaliser votre commande, veuillez accepter nos Conditions de Confidentialité. Nous collectons votre nom, votre numéro de téléphone, votre adresse de livraison et votre ville uniquement pour traiter et livrer votre commande — ces informations ne sont jamais vendues.',
privacy_accept: 'Accepter',
privacy_no: 'Non',
privacy_accept_terms: 'Accepter les Conditions',
privacy_continue_without: 'Continuer Sans Accepter',
privacy_accept_anyway: 'Accepter Quand Même',
    /* ── MODAL KEYS ── */
    modal_order_title: 'Votre Commande', modal_order_sub: 'Vérifiez votre produit et définissez la quantité',
    modal_qty: 'Quantité', modal_purchase: 'Acheter →',
    modal_details_title: 'Vos Coordonnées', modal_details_sub: 'Remplissez vos informations de livraison',
    modal_name: 'Nom Complet', modal_city: 'Ville', modal_city_other: 'Précisez votre ville', modal_phone: 'Numéro de Téléphone',
    modal_email: 'Email (optionnel)', modal_address: 'Adresse Complète', modal_payment_btn: 'Paiement →',
    modal_back: '← Retour', modal_payment_title: 'Mode de Paiement',
    modal_payment_sub: 'Votre mode de paiement a été sélectionné',
    modal_cod: 'Paiement à la Livraison', modal_cod_desc: 'Payez à la réception de votre commande — aucune carte requise',
    modal_confirm: 'Confirmer la Commande →', modal_success_title: 'Commande Passée !',
    modal_success_msg: 'Merci ! Votre commande a été reçue. Notre équipe vous contactera bientôt.',
    modal_questions: 'Des questions ? WhatsApp :', modal_close: 'Fermer',
    /* ── ABOUT PAGE ── */
    ab_badge: 'ELECTRO BADR · CASABLANCA',
    ab_hero_title: '40 Ans d\'Électronique de Confiance au Maroc',
    ab_hero_sub: 'D\'une petite boutique à Casablanca à la destination électronique la plus fiable du Maroc — nous servons les familles depuis 1983.',
    ab_stat_years: 'Ans de confiance', ab_stat_products: 'Produits', ab_stat_customers: 'Clients satisfaits',
    ab_who: 'Qui Sommes-Nous',
    ab_story: 'Electro Badr est né à Casablanca en 1883 en tant que maison horlogère spécialisée — une entreprise familiale fondée sur une conviction simple : chaque famille marocaine mérite un accès à des montres de qualité à des prix honnêtes.',
    ab_quote: '"Nous ne vendons pas seulement de l\'électronique — nous construisons des relations qui durent des générations."',
    ab_quote_author: '— Badr, Fondateur',
    ab_journey: 'Notre Parcours',
    ab_why: 'Pourquoi Nous Choisir',
    ab_val1_title: 'Qualité Avant Tout', ab_val1_desc: 'Chaque produit certifié et testé avant la vente. Aucun compromis.',
    ab_val2_title: 'Paiement à la Livraison', ab_val2_desc: 'Payez uniquement à la réception de votre commande.',
    ab_val3_title: 'Livraison Rapide', ab_val3_desc: 'Livraison nationale dans tout le Maroc — rapide et fiable.',
    ab_val4_title: 'Toujours Là', ab_val4_desc: 'Support WhatsApp 24/7 — de vraies personnes, de vraies réponses.',
    ab_brands: 'Marques que Nous Portons',
    ab_visit: 'Nous Rendre Visite',
    ab_cta_title: 'Venez nous voir à Casablanca',
    ab_cta_sub: 'Notre équipe est toujours prête à vous aider à trouver l\'appareil idéal. Visitez notre boutique ou commandez en ligne.',
    ab_shop_btn: '🛍 Boutique', ab_wa_btn: '💬 WhatsApp',
    ab_contact: 'Contactez-Nous',
    ab_phone_label: 'Téléphone', ab_email_label: 'Email',
    ab_location_label: 'Adresse', ab_hours_label: 'Heures de Support',
    ab_hours_val: '24/7 via WhatsApp',
    review_write: '✍️ Laisser un Avis', review_name_ph: 'Votre nom', review_phone_ph: 'Téléphone utilisé pour votre commande',
review_comment_ph: 'Partagez votre expérience avec ce produit', review_submit: 'Envoyer l\'Avis',
review_fill_all: 'Veuillez remplir tous les champs et choisir une note.', review_sending: 'Envoi...',
review_photo_too_large: 'Photo trop volumineuse (5 Mo max).', review_success: 'Merci ! Votre avis apparaîtra après approbation.',
review_not_verified: 'Nous n\'avons pas pu vérifier d\'achat de ce produit avec ce numéro.', review_error: 'Erreur de connexion. Veuillez réessayer.',
    /* ── CONTACT PAGE ── */
    ct_badge: 'NOUS CONTACTER',
    ct_hero_title: 'Parlez à Electro Badr',
    ct_hero_sub: 'Que ce soit une question de commande ou une demande de livraison — notre équipe est toujours là pour vous, 24/7.',
    ct_pill1: 'WhatsApp · Le plus rapide', ct_pill2: 'Envoyer un email', ct_pill3: 'Nous rendre visite', ct_pill4: 'Nous appeler',
    ct_ch1_title: 'WhatsApp', ct_ch1_speed: 'Réponse en minutes · 24/7', ct_ch1_btn: 'Discuter',
    ct_ch2_title: 'Email', ct_ch2_speed: 'Réponse sous 24 heures', ct_ch2_btn: 'Envoyer',
    ct_ch3_title: 'Nous Rendre Visite', ct_ch3_val: 'Electro Badr, Casablanca', ct_ch3_speed: 'Venez nous voir en personne', ct_ch3_btn: 'Itinéraire',
    ct_ch4_title: 'Nous Appeler', ct_ch4_speed: 'Disponible 10h – 19h', ct_ch4_btn: 'Appeler',
    ct_fastest: 'Le moyen le plus rapide de nous joindre',
    ct_wa_title: 'Écrivez-nous sur WhatsApp', ct_wa_sub: 'Nous répondons en quelques minutes — 24/7', ct_wa_btn: 'Discuter',
    ct_details: 'Nos coordonnées',
    ct_phone_label: 'Téléphone', ct_email_label: 'Email',
    ct_location_label: 'Adresse', ct_hours_label: 'Heures de support', ct_hours_val: '24/7 via WhatsApp',
    ct_send: 'Envoyer un message',
    ct_tab1: 'Question commande', ct_tab2: 'Support', ct_tab3: 'Autre',
    ct_name_label: 'Nom complet', ct_phone_field: 'Votre téléphone',
    ct_email_field: 'Votre email', ct_subject_label: 'Sujet',
    ct_msg_label: 'Message', ct_submit: 'Envoyer →',
    ct_faq: 'Questions fréquentes',
    ct_faq1_q: 'Combien de temps prend la livraison ?', ct_faq1_a: 'En général 2 à 4 jours ouvrables dans tout le Maroc.',
    ct_faq2_q: 'Puis-je payer à la livraison ?', ct_faq2_a: 'Oui — le paiement à la livraison est disponible partout au Maroc.',
    ct_faq3_q: 'Puis-je retourner un produit ?', ct_faq3_a: 'Contactez-nous dans les 7 jours suivant la réception de votre commande.',
    ct_faq4_q: 'Les produits sont-ils garantis ?', ct_faq4_a: 'Oui — tous les produits sont testés et certifiés avant livraison.',
    /* ── NEW CATEGORY TITLES ── */
    cat_grooming: 'Rasage & Soins Homme', cat_calculators: 'Calculatrices', cat_gadgets: 'Gadgets Électroniques',

    /* ── SHOP PRODUCT NAMES & DESCRIPTIONS ── */
    /* ── SHOP PRODUCTS: POWER BANKS ── */
    p_powerbanks_1_name: 'SHtel Batterie Externe 20000mAh 45W SP-32', p_powerbanks_1_desc: 'Batterie externe 20 000 mAh avec charge rapide 45 W, compatible charge d\'ordinateur portable. Format compact avec câble Type-C intégré et écran numérique.',
    p_powerbanks_2_name: 'SHtel Batterie Externe 20000mAh 22.5W SP-24', p_powerbanks_2_desc: 'Batterie externe 20 000 mAh avec sortie de charge rapide 22,5 W. Câbles Type-C et Lightning intégrés, écran numérique avec affichage du pourcentage.',
    p_powerbanks_3_name: 'SHtel Batterie Externe 10000mAh 22.5W SP-90', p_powerbanks_3_desc: 'Batterie externe 10 000 mAh avec sortie de charge rapide 22,5 W. Câble USB-C intégré, plus ports USB-C et USB-A.',
    p_powerbanks_4_name: 'Konfulon Batterie Externe Magnétique Sans Fil 10000mAh M22W', p_powerbanks_4_desc: 'Batterie externe magnétique sans fil avec charge sans fil 15 W et charge PD 20 W. Alignement magnétique puissant, plus ports USB et USB-C.',
    p_powerbanks_5_name: 'Xiaomi Batterie Externe Sans Fil 20000mAh', p_powerbanks_5_desc: 'Batterie externe 20 000 mAh avec charge sans fil 10 W. Sortie USB-A 18 W, plus double sortie USB-A et USB-C.',
    p_powerbanks_6_name: 'Oryx CUBE-10 Batterie Externe Sans Fil 10000mAh', p_powerbanks_6_desc: 'Batterie externe compacte filaire et sans fil avec charge sans fil 10 W. Charge rapide Type-C 18 W dans un design carré robuste.',
    p_powerbanks_7_name: 'Dinex Batterie Externe LED Portable 20000mAh X-200', p_powerbanks_7_desc: 'Batterie externe 20 000 mAh avec panneau LED intégré. Charge rapide 22,5 W, écran LCD et sangle de transport intégrée.',
    p_powerbanks_8_name: 'Dinex Mini Batterie Externe 5000mAh A333', p_powerbanks_8_desc: 'Mini batterie externe portable avec sortie 22,5 W et entrée/sortie PD 20 W. Bascule entre Type-C et Lightning, avec support escamotable intégré.',
    p_powerbanks_9_name: 'Konfulon Batterie Externe Outdoor 100000mAh A45Q', p_powerbanks_9_desc: 'Batterie externe outdoor à très grande capacité avec charge rapide PD 20 W et 22,5 W. 6 ports de sortie avec écran LED, adaptée aux tablettes et smartphones.',
    p_powerbanks_10_name: 'Konfulon Batterie Externe 70000mAh A66Q', p_powerbanks_10_desc: 'Batterie externe outdoor haute capacité avec charge rapide PD 30 W et 22,5 W. 7 ports de sortie, plus un projecteur LED intégré.',
    /* ── SHOP PRODUCTS: SECURITY CAMERAS ── */
    p_cameras_1_name: 'Caméra Solaire IA 3-en-1 (Série SPM-T)', p_cameras_1_desc: 'Caméra de sécurité 4K solaire avec trois objectifs en une seule unité. Connectivité 4G/Wi-Fi, couverture à 360° et vision nocturne couleur.',
    p_cameras_2_name: 'AOV Caméra Solaire Intelligente (4 Objectifs)', p_cameras_2_desc: 'Caméra intelligente solaire avec quatre véritables objectifs et résolution Ultra HD 20 MP. Stockage cloud, interphone vocal et enregistrement couleur jour et nuit.',
    p_cameras_3_name: 'Caméra de Sécurité Extérieure Solaire HD', p_cameras_3_desc: 'Caméra de sécurité extérieure solaire avec Ultra HD 4K et vue à 360°. Batterie intégrée, détection PIR et surveillance 4G pour les zones isolées.',
    p_cameras_4_name: 'Hikvision Caméra Tourelle Couleur 3K', p_cameras_4_desc: 'Caméra tourelle d\'intérieur avec résolution 3K et technologie Smart Hybrid Light. Vidéo couleur nette jour et nuit avec large champ de vision.',
    p_cameras_5_name: 'Imou Caméra Extérieure Bullet 2E', p_cameras_5_desc: 'Caméra extérieure de type bullet avec résolution 2K et détection humaine. Projecteur activé par mouvement et vision nocturne couleur intelligente.',
    p_cameras_6_name: 'TP-Link Tapo C212 Caméra Motorisée (Pan/Tilt)', p_cameras_6_desc: 'Caméra de sécurité domestique motorisée (pan/tilt) avec résolution 2K et suivi de mouvement. Détection de personnes, audio bidirectionnel, stockage local ou cloud.',
    p_cameras_7_name: 'Ezviz H8c Caméra Domestique Intelligente', p_cameras_7_desc: 'Caméra domestique intelligente avec résolution 1080p et vue panoramique à 360°. Suivi intelligent et alerte de défense active dès qu\'un mouvement est détecté.',
    p_cameras_8_name: 'Hikvision Caméra Bullet ColorVu', p_cameras_8_desc: 'Caméra extérieure de type bullet avec technologie ColorVu à lumière hybride intelligente. Enregistrement couleur jour et nuit, design étanche IP67.',
    p_cameras_9_name: 'Hikvision Caméra Bullet Turbo HD', p_cameras_9_desc: 'Caméra bullet HD avec technologie HDTVI pour une image nette. Étanchéité IP67 et vision nocturne EXIR pour un usage extérieur.',
    p_cameras_10_name: 'Imou Caméra Cruiser Dual 2 (10MP)', p_cameras_10_desc: 'Caméra de sécurité extérieure à double objectif avec résolution combinée de 10 MP. Détection des personnes et véhicules avec gyrophare rouge et bleu.',
    /* ── SHOP PRODUCTS: SPEAKERS & RADIOS ── */
    p_speakers_1_name: 'Sing-e Enceinte de Fête Double 8 Pouces', p_speakers_1_desc: 'Enceinte tour double 8 pouces avec grille de style octogonal. Anneaux lumineux RGB multicolores autour de chaque haut-parleur. Affichage LED de l\'heure sur le dessus ; micro et télécommande inclus.',
    p_speakers_2_name: 'Sing-e Enceinte HiFi 50W ZQS8239', p_speakers_2_desc: 'Enceinte HiFi double 8 pouces avec sortie 50 W. DSP intégré et éclairage LED coloré en anneau. Batterie 7,4 V 5000 mAh ; micro et télécommande inclus.',
    p_speakers_3_name: 'Sing-e Enceinte Tour Double 10 Pouces', p_speakers_3_desc: 'Enceinte tour double 10 pouces avec des basses profondes. Deux entrées micro plus une entrée guitare/AUX pour les artistes. USB, carte TF, écran LED ; fonctionne sur secteur.',
    p_speakers_4_name: 'Avcrowns Enceinte sur Chariot 15 Pouces CH-8615', p_speakers_4_desc: 'Enceinte professionnelle sur roulettes 15 pouces avec puissance P.M.P.O. de 5500 W. Deux micros sans fil et télécommande inclus. Jumelage TWS, USB, carte TF, radio FM et éclairage LED.',
    p_speakers_5_name: 'NNS Radio Rétro RGB NS-7069BT', p_speakers_5_desc: 'Radio AM/FM/OC avec bande lumineuse RGB colorée. Bluetooth avec jumelage TWS, lecture USB et carte TF. Antenne rétractable et poignée de transport pour plus de mobilité.',
    p_speakers_6_name: 'NNS Radio & Horloge Cuivrée Striée NS-7211BT', p_speakers_6_desc: 'Radio AM/FM/OC avec horloge analogique intégrée. Lecture Bluetooth, USB et carte TF avec boutons de commande dédiés. Fonctionne sur batterie 18650, câble de charge inclus.',
    p_speakers_7_name: 'NNS Radio Cuivrée Compacte NS-6655BT', p_speakers_7_desc: 'Radio AM/FM/OC dans un boîtier compact aux finitions cuivrées. Bluetooth avec jumelage TWS, lecture USB et carte TF. Fonctionne sur batterie 18650, câble de charge inclus.',
    p_speakers_8_name: 'NNS Radio & Horloge en Bois NS-7116BT', p_speakers_8_desc: 'Radio AM/FM/OC dans un boîtier aux tons bois chaleureux. Horloge intégrée, Bluetooth, lecture USB et carte TF. Fonctionne sur batterie 18650, câble de charge inclus.',
    p_speakers_9_name: 'Avcrowns Enceinte Karaoké 12 Pouces CH-126', p_speakers_9_desc: 'Enceinte karaoké rechargeable 12 pouces avec puissance P.M.P.O. de 10 000 W. Deux micros sans fil et télécommande inclus. USB, carte TF, radio FM, AUX et éclairage LED RGB.',
    p_speakers_10_name: 'Meier Enceinte Style Gramophone Rétro', p_speakers_10_desc: 'Enceinte au style gramophone rétro avec connectivité Bluetooth 5.4. Lecture radio FM, USB, carte TF ou entrée AUX. Batterie rechargeable ; câbles USB et AUX inclus.',
    /* ── SHOP PRODUCTS: SMART WATCHES ── */
    p_watches_1_name: 'Smartbarry C90 MAX (Montre Ultra 4G)', p_watches_1_desc: 'Montre connectée 4G avec grand écran de 2,2 pouces et double caméra Full HD. Charge magnétique, compatible avec 3 opérateurs réseau.',
    p_watches_2_name: 'Riversong Motive 10 GT', p_watches_2_desc: 'Montre connectée GPS avec écran AMOLED de 1,43 pouce et positionnement multi-satellite. Étanchéité 3 ATM, avec bracelet magnétique supplémentaire inclus.',
    p_watches_3_name: 'Smartbarry C006pro Montre Enfant', p_watches_3_desc: 'Montre connectée enfant 5G avec écran amovible de 2,01 pouces et caméra HD. Étanchéité IP67, localisation LBS, appel vidéo et messagerie vocale.',
    p_watches_4_name: 'Black Shark A3', p_watches_4_desc: 'Montre connectée avec écran HD de 1,53 pouce et une autonomie allant jusqu\'à 14 jours. Suit vos données fitness avec un design robuste, adapté au quotidien.',
    p_watches_5_name: 'Kieslect Kr3', p_watches_5_desc: 'Montre connectée avec lunette en acier inoxydable et GPS bi-bande à six satellites. Génération de cadrans personnalisés grâce à l\'intelligence artificielle.',
    p_watches_6_name: 'Kieslect Elite2', p_watches_6_desc: 'Montre connectée avec lunette en céramique biseautée et GPS bi-bande avec navigation d\'itinéraire. Assistant vocal IA en ligne intégré pour un contrôle mains libres.',
    p_watches_7_name: 'Mibro Lite3 Pro', p_watches_7_desc: 'Montre connectée GPS avec écran AMOLED et set de deux bracelets en cuir véritable. Suit le rythme cardiaque, le sommeil et l\'hydratation tout au long de la journée.',
    p_watches_8_name: 'Riversong Motive 6 Pro', p_watches_8_desc: 'Montre connectée avec écran tactile complet de 1,83 pouce et appels Bluetooth. Plus de 100 modes sportifs et suivi du taux d\'oxygène dans le sang.',
    p_watches_9_name: 'Kieslect Elfin', p_watches_9_desc: 'Montre connectée ultra-fine de 6 mm avec écran AMOLED HD de 1,32 pouce. Cadrans personnalisables grâce à l\'intelligence artificielle pour un look unique.',
    p_watches_10_name: 'Kieslect Lora 3', p_watches_10_desc: 'Montre connectée métallique ultra-fine au design tendance pour un usage quotidien. Suivi de santé 24h/24 avec appels Bluetooth en une touche.',
    /* ── SHOP PRODUCTS: BEAUTY & CARE ── */
    p_beauty_1_name: 'Braun Silk-épil 5 SensoSmart Épilateur', p_beauty_1_desc: 'Épilateur usage sec et humide avec technologie SensoSmart pour une épilation en douceur. Une épilation extra-douce qui garde la peau lisse jusqu\'à 4 semaines, avec 2 accessoires supplémentaires inclus.',
    p_beauty_2_name: 'Sokany Lisseur Céramique SK-993', p_beauty_2_desc: 'Lisseur usage sec et humide avec plaques en céramique et nano-argent. Chauffe jusqu\'à 400°C pour un résultat digne d\'un salon professionnel.',
    p_beauty_3_name: 'DSP Lisseur Vapeur Lustre 10242', p_beauty_3_desc: 'Lisseur vapeur avec plaques en aluminium pour un résultat lisse et brillant. Écran LED numérique avec infusion de protéines et kératine en un seul passage.',
    p_beauty_4_name: 'Enzo Professional Brosse Volumisante Une Étape PLUS', p_beauty_4_desc: 'Brosse soufflante qui sèche et donne du volume aux cheveux en une seule étape. Plusieurs niveaux de chaleur avec fonction air froid pour fixer la coiffure.',
    p_beauty_5_name: 'Enzo Professional Brosse Magique 2-en-1', p_beauty_5_desc: 'Sèche et lisse les cheveux en même temps grâce à une brosse rotative. Livrée avec une pochette de voyage pour un rangement facile.',
    p_beauty_6_name: 'BaByliss Fer à Boucler 19mm', p_beauty_6_desc: 'Fer à boucler de 19 mm pour des boucles et ondulations définies et longue tenue. Chaleur contrôlée jusqu\'à 210°C pour une coiffure optimale.',
    /* ── SHOP PRODUCTS: MEN'S GROOMING ── */
    p_grooming_1_name: 'Tondeuse Barbe Kemei 1677', p_grooming_1_desc: 'Tondeuse à barbe de précision avec réglages de longueur de 0 à 7 mm. Lames auto-affûtantes qui restent tranchantes avec un usage régulier. Charge USB-C offrant jusqu\'à 4 heures d\'autonomie.',
    p_grooming_2_name: 'Philips One Blade 360', p_grooming_2_desc: 'Rasoir rotatif à têtes flottantes 3D pour un rasage de près. Utilisation à sec ou humide, avec tondeuse escamotable pour les finitions. Une charge complète offre jusqu\'à 60 minutes d\'utilisation.',
    p_grooming_3_name: 'Oraimo Rasoir Électrique', p_grooming_3_desc: 'Têtes de rasage rotatives qui glissent en douceur pour un rasage de près. Utilisation à sec ou humide, avec tondeuse escamotable pour les pattes et la moustache. Se recharge via USB-C, pratique et sans fil.',
    p_grooming_4_name: 'Braun Kit Tondeuse Cheveux', p_grooming_4_desc: 'Ensemble tondeuse cheveux avec lame en acier inoxydable durable. Inclut 4 sabots de guidage pour différentes longueurs de coupe. Charge USB-C et moteur silencieux pour un usage quotidien.',
        p_grooming_5_name: 'Kemei KM-320B Tondeuse Corps', p_grooming_5_desc: 'Tondeuse corporelle avec lame en acier au carbone durable pour une performance nette et longue durée. Design étanche IPX4 facile à nettoyer après utilisation. Livrée avec un peigne guide, une brosse de nettoyage et un câble de charge USB.',
    p_grooming_6_name: 'Kemei KM-8536 Set Tondeuse & Rasoir', p_grooming_6_desc: 'Ensemble professionnel de coiffure en 2 pièces avec une tondeuse à cheveux et un rasoir de finition, tous deux à 9000 TR/MIN. Lames à revêtement céramique avec écran LCD affichant le niveau de batterie. Jusqu\'à 240 minutes d\'autonomie sur une charge complète.',
    p_grooming_7_name: 'Kemei KM-2024 Rasoir à Grille', p_grooming_7_desc: 'Rasoir à grille classique avec double grille pour un rasage net et précis. Tête pivotante à 12° pour un contournage en douceur. Étanche IPX4 avec charge USB et verrouillage de voyage pour un rangement sûr.',
    p_grooming_8_name: 'Philips OneBlade Tondeuse Intime', p_grooming_8_desc: 'Rasoir et tondeuse pour zones intimes avec lame SkinProtect conçue pour une douceur supplémentaire. Comprend un peigne de coupe pour contrôler la longueur et un gant exfoliant pour un résultat plus lisse.',
    p_grooming_9_name: 'Kemei KM-277 Kit de Toilettage 3-en-1', p_grooming_9_desc: 'Kit de toilettage 3-en-1 couvrant les cheveux, le visage et le corps en un seul appareil. Comprend un embout tondeuse nez et oreilles ainsi qu\'une tête de rasage corporel. Rechargeable par USB avec une lame professionnelle à double usage.',
    /* ── SHOP PRODUCTS: CLOCKS & ALARMS ── */
    p_wallwatch_1_name: 'Rhythm Réveil à Quartz (Doré)', p_wallwatch_1_desc: 'Réveil à quartz avec chiffres et aiguilles phosphorescents. Design compact pour la table de chevet avec interrupteur d\'alarme simple marche/arrêt.',
    p_wallwatch_2_name: 'Rhythm Réveil à Quartz (Noir)', p_wallwatch_2_desc: 'Réveil à quartz avec chiffres et aiguilles phosphorescents. Design compact pour la table de chevet avec interrupteur d\'alarme simple marche/arrêt.',
    p_wallwatch_3_name: 'Rhythm Réveil (Bleu)', p_wallwatch_3_desc: 'Réveil analogique compact avec cadran blanc bien lisible. Mouvement à quartz simple et fiable pour un usage quotidien sur la table de chevet.',
    p_wallwatch_4_name: 'Réveil à Balayage Silencieux 3567', p_wallwatch_4_desc: 'Réveil analogique à mouvement silencieux, sans bruit de tic-tac. Sonnerie d\'alarme à deux tons et veilleuse intégrée.',
    p_wallwatch_5_name: 'Horloge Numérique LED GS-5308', p_wallwatch_5_desc: 'Horloge numérique LED avec grands chiffres faciles à lire. Alarme intégrée avec indicateur AM/PM.',
    /* ── SHOP PRODUCTS: PHONE ACCESSORIES ── */
    p_phones_1_name: 'DINEX Chargeur Rapide Type C 50W', p_phones_1_desc: 'Chargeur rapide 50 W avec plusieurs options de charge. Une technologie intelligente garantit une charge sécurisée. Parfait pour alimenter plusieurs appareils.',
    p_phones_2_name: 'Dinex Câble de Charge 100W 3m', p_phones_2_desc: 'Câble de charge USB-C 100 W haute vitesse. Conception durable pour un usage longue durée. Idéal pour smartphones, tablettes et ordinateurs portables.',
    p_phones_3_name: 'Dinex Chargeur Rapide Lightning 20W', p_phones_3_desc: 'Chargeur rapide 20 W avec câble Lightning inclus. Design compact pour la maison ou les déplacements. Charge quotidienne sûre et fiable.',
    p_phones_4_name: 'Dinex Support Téléphone Voiture', p_phones_4_desc: 'Support téléphone réglable avec rotation à 360°. Offre une prise sûre et stable. Idéal pour la conduite et une utilisation mains libres.',
    p_phones_5_name: 'SHtel Câble Type C 3.4A', p_phones_5_desc: 'Charge rapide 3,4 A avec transfert de données fiable. Conception durable conçue pour un usage quotidien. Compatible avec la plupart des appareils USB-C.',
    p_phones_6_name: 'Dinex Câble de Charge Rapide 3.0A', p_phones_6_desc: 'Câble Lightning durable pour la charge et la synchronisation. Offre des performances rapides et stables. Conçu pour les appareils Apple.',
    p_phones_7_name: 'Xiaomi Chargeur Rapide 120W', p_phones_7_desc: 'Chargeur GaN ultra-rapide 120 W au design compact. Offre une charge puissante et efficace. Parfait pour les appareils USB-C compatibles.',
    p_phones_8_name: 'Oraimo Chargeur Lightning 20W', p_phones_8_desc: 'Chargeur fiable 24 W avec câble de charge inclus. Alimentation rapide, sûre et efficace. Idéal pour les besoins de charge quotidiens.',
    p_phones_9_name: 'Dinex Adaptateur Type C 4OW', p_phones_9_desc: 'Chargeur rapide compact 40 W pour un usage quotidien. Offre une charge sûre et stable. Compatible avec les appareils USB-C.',
    p_phones_10_name: 'Plokama Trépied et Perche à Selfie', p_phones_10_desc: 'Trépied stable et léger pour photos et vidéos. Hauteur réglable avec tête rotative à 360°. Parfait pour appareils photo et smartphones.',
    /* ── SHOP PRODUCTS: ANDROID BOXES ── */
    p_android_1_name: 'D-Plus D96 Boîtier AndroidTV', p_android_1_desc: 'Boîtier TV Android 14 avec sortie 8K Ultra HD et Wi-Fi 6. Google Assistant intégré, compatible Netflix, YouTube et Prime Video.',
    p_android_2_name: 'Xiaomi Clé TV Intelligente 4K', p_android_2_desc: 'Clé TV Android 4K compacte avec Google Assistant intégré. Livrée avec Netflix, Prime Video et YouTube préinstallés.',
    p_android_3_name: 'Xiaomi Boîtier TV S (3ème Génération)', p_android_3_desc: 'Boîtier Google TV avec sortie 4K Ultra-HD et Chromecast intégré. Inclut l\'accès à Netflix, Prime Video et Google Play.',
    p_android_4_name: 'Senic H96 Max Boîtier Android', p_android_4_desc: 'Boîtier TV Android 11 avec sortie 4K HDR Ultra HD. Design compact avec télécommande simple incluse.',
    p_android_5_name: 'Vectron VBox Alpha', p_android_5_desc: 'Boîtier TV Android 12 avec Wi-Fi 5G et puce quad-core Allwinner H313. Offre du 4K Ultra HD avec Netflix, YouTube et Prime Video.',
    p_android_6_name: 'Senic X98Q Boîtier Android', p_android_6_desc: 'Boîtier TV Android 12 avec sortie 8K Ultra HD. Deux ports USB 3.0 et un emplacement carte TF pour le stockage.',
    p_android_7_name: 'Tanix A3 Boîtier Android', p_android_7_desc: 'Boîtier TV Android 11 avec 4K Ultra HD et support HDR. Wi-Fi bi-bande 2,4G/5G avec processeur quad-core.',
    p_android_8_name: 'Echolink S400B Boîtier Android', p_android_8_desc: 'Boîtier TV Android 4K Ultra HD avec Google Assistant intégré. Compatible Netflix, Disney+, HBO Max et Plex.',
    /* ── SHOP PRODUCTS: CALCULATORS ── */
    p_calculators_1_name: 'Texas Instruments TI-Nspire CX II-T CAS', p_calculators_1_desc: 'Calculatrice graphique avec système de calcul formel CAS et écran couleur. Fonctionne sous Python, autorisée pour le Baccalauréat et les examens universitaires.',
    p_calculators_2_name: 'NumWorks Calculatrice Graphique', p_calculators_2_desc: 'Calculatrice graphique avec mode examen et application Python intégrée. Écran tactile couleur, conçue par une entreprise française.',
    p_calculators_3_name: 'Casio Graph Math+ CLASSW40', p_calculators_3_desc: 'Calculatrice graphique avec mode examen et support Python. Écran couleur pour le lycée et l\'université, garantie 3 ans.',
    p_calculators_4_name: 'Casio fx-991ES PLUS (2ème Édition)', p_calculators_4_desc: 'Calculatrice scientifique avec 417 fonctions et affichage naturel façon manuel scolaire. Alimentation solaire et à pile, non programmable.',
    p_calculators_5_name: 'Deli D991ES PLUS Calculatrice Scientifique', p_calculators_5_desc: 'Calculatrice scientifique avec 417 fonctions et affichage façon manuel scolaire. Alimentation solaire et à pile, garantie 3 ans.',
    p_calculators_6_name: 'Casio fx-82ES PLUS (2ème Édition)', p_calculators_6_desc: 'Calculatrice scientifique avec 252 fonctions et affichage naturel façon manuel scolaire. Fonctionne à pile (AAA), non programmable.',
    p_calculators_7_name: 'Casio fx-92 Collège ClassWiz', p_calculators_7_desc: 'Calculatrice scientifique avec 417 fonctions pour élèves de collège et lycée. Écran haute résolution, autorisée pour les examens français.',
    /* ── SHOP PRODUCTS: ELECTRONIC GADGETS ── */
    p_gadgets_1_name: 'Brassard de Sport 360°', p_gadgets_1_desc: 'Brassard de sport ajustable à 360° pour téléphones de 4 à 7 pouces. Fermeture double sécurisée, sangle extensible et confortable.',
    p_gadgets_2_name: 'Aerbes Projecteur LED Solaire 400W', p_gadgets_2_desc: 'Projecteur LED solaire 400 W avec panneau solaire détachable. Étanche IP67 avec télécommande sans fil.',
    p_gadgets_3_name: 'Tensiomètre Électronique de Bras', p_gadgets_3_desc: 'Tensiomètre à bras avec mesure intelligente. Affiche la pression systolique, diastolique et le pouls, avec mémoire de 120 mesures.',
    p_gadgets_4_name: 'Lot de Lampes Torches LED (2 Pièces)', p_gadgets_4_desc: 'Lot de 2 lampes torches LED de 1200 lumens avec zoom. Rechargeables par USB via batteries 18650, résistantes à l\'eau IPX4.',
    p_gadgets_5_name: 'Stabilisateur Gimbal à Suivi IA Q625', p_gadgets_5_desc: 'Stabilisateur gimbal à suivi IA avec suivi automatique du visage. Rotation à 360°, équilibrage automatique et support trépied.',
    p_gadgets_6_name: 'TL16 Ventilateur de Refroidissement à Clipser', p_gadgets_6_desc: 'Ventilateur de refroidissement à clipser pour smartphone, pour une dissipation rapide de la chaleur. Fonctionnement silencieux avec éclairage RGB coloré.',
    p_gadgets_7_name: 'DuraM Enceinte Bluetooth Lumineuse RGB', p_gadgets_7_desc: 'Enceinte Bluetooth portable avec design lumineux RGB. Basses puissantes et longue autonomie de lecture.',
    p_gadgets_8_name: 'Celet Bracelet Connecté Fitness', p_gadgets_8_desc: 'Bracelet connecté suivant le rythme cardiaque, le sommeil et les pas. Bracelet en maille élégant, disponible en noir, doré ou argenté.',
    p_gadgets_9_name: 'SUITU Aspirateur à Main', p_gadgets_9_desc: 'Aspirateur à main compact et sans fil avec succion de 6000 Pa. Charge rapide Type-C, pour la voiture ou la maison.',
    p_gadgets_10_name: 'Intelli System Tensiomètre de Poignet', p_gadgets_10_desc: 'Tensiomètre de poignet avec mesure intelligente. Mémoire des mesures, mode deux utilisateurs, annonce vocale.',
  },
    ar: {
    home: 'الرئيسية', shop: 'المتجر', about: 'من نحن', contact: 'اتصل بنا',
    follow_us: 'تابعونا',
    hero_badge: 'منذ 1983 · إلكترونيات موثوقة في المغرب',
    hero_line1: 'إلكترونيات', hero_line2: 'مميزة،', hero_line3: 'توصل إليك',
    hero_desc: 'اكتشف مجموعتنا المختارة من أجهزة الإلكترونيات — من البطاريات المحمولة إلى الساعات الذكية. جودة تثق بها، دفع عند الاستلام.',
    stat_years: 'سنة من الثقة', stat_products: 'منتج', stat_customers: 'عميل',
    hero_btn1: '🛍 تسوق الآن', hero_btn2: '💬 تواصل معنا',
    popular_cats: 'الفئات الشائعة', best_sellers: 'الأكثر مبيعاً', reviews_title: 'آراء العملاء',
    review1: 'جودة ممتازة وتوصيل سريع.',
    review2: 'خدمة احترافية جداً.',
    review3: 'سأشتري مجدداً بالتأكيد.',
    feat1_title: 'توصيل سريع',          feat1_desc: 'التوصيل متاح في جميع أنحاء المغرب.',
    feat2_title: 'الدفع عند الاستلام',  feat2_desc: 'ادفع فقط عند وصول طلبك.',
    feat3_title: 'جودة مضمونة',         feat3_desc: 'إلكترونيات مختارة بعناية.',
    feat4_title: 'دعم 24/7',            feat4_desc: 'مساعدة فورية عبر واتساب.',
    cat_powerbanks: 'بطاريات محمولة', cat_cameras: 'كاميرات المراقبة',
    cat_speakers: 'مكبرات الصوت والراديو', cat_watches: 'ساعات ذكية',
    cat_beauty: 'الجمال والعناية', cat_wallwatch: 'ساعات حائط وتنبيهات',
    cat_phones: 'ملحقات الهاتف', cat_android: 'أجهزة أندرويد',
    shop_title: 'متجرنا', shop_subtitle: 'تصفح الإلكترونيات حسب الفئة',
    shop_now: 'تسوق الآن →',
    shop_add_cart: '🛒 أضف للسلة', shop_order_now: 'اطلب الآن',
    bs_headphones: 'TVT Solar 4G Cam AOV System', bs_headphones_desc: 'رؤية بانورامية 360°، طاقة شمسية، رؤية ليلية، نظام بـ4 كاميرات.',
    bs_watch: 'SHtel Power Bank 20000mAh SP-24', bs_watch_desc: 'شحن سريع 22.5W، كابلات Type-C/Lightning، شاشة رقمية.',
    bs_powerbank: 'Philips One Blade 360', bs_powerbank_desc: 'رؤوس عائمة ثلاثية الأبعاد، للاستخدام الجاف والمبلل، مقص تشذيب قابل للطي، شحن خلال 60 دقيقة.',
    cart_title: '🛒 سلة التسوق',
    cart_empty: 'سلتك فارغة.', cart_total: 'المجموع', go_shop: 'اذهب إلى المتجر →',
    pay_now: 'ادفع الآن →',
    footer_tagline: 'إلكترونيات مميزة منذ 1983',
    footer_desc: 'وجهتك الموثوقة للإلكترونيات عالية الجودة. الدفع عند الاستلام في جميع أنحاء المغرب.',
    footer_quick_links: 'روابط سريعة', footer_categories: 'الفئات', footer_contact_col: 'اتصل بنا',
    footer_location: 'المغرب', footer_hours: 'دعم 24/7 عبر واتساب',
    footer_copy: '© 2026 إلكترو بدر', footer_made: 'صُنع بـ ❤️ في المغرب',
    map_find_us: 'جدنا', map_name: 'إلكترو بدر', map_location: 'الدار البيضاء، المغرب', map_directions: 'احصل على الاتجاهات',
    search_placeholder: 'ابحث عن منتجات...', no_results: 'لا توجد منتجات.',
    mq_morocco: 'مصنوع بالمغرب', mq_quality: 'جودة مضمونة',
mq_cod: 'الدفع عند الاستلام', mq_shipping: 'شحن سريع في جميع أنحاء المغرب',
mq_support: 'دعم واتساب 24/7', mq_certified: 'منتجات معتمدة فقط', mq_since: 'منذ 1983',
tl_1883: 'تأسيس إلكترو بدر في الدار البيضاء — محل صغير لبيع الساعات وُلد من شغف بالساعات عالية الجودة.',
tl_1995: 'توسيع نطاق المنتجات ليشمل المعدات الصوتية والكاميرات وملحقات الموبايل.',
tl_2014: 'افتتاح إلكترو بدر 2 — فرع مخصص بالكامل للإلكترونيات الاستهلاكية.',
tl_2022: 'إطلاق Badr Luxury — خط منتجاتنا المخصص للساعات والإكسسوارات الفاخرة الأصلية.',
tl_2026: 'إطلاق الطلب الإلكتروني الكامل مع الدفع عند الاستلام في جميع أنحاء المغرب.',
tl_tag_founded: 'التأسيس', tl_tag_expansion: 'التوسع', tl_tag_milestone: 'إنجاز',
tl_tag_innovation: 'ابتكار', tl_tag_today: 'اليوم',
ab_more: '+ المزيد',delivery_fee_label: 'رسوم التوصيل',
privacy_text: 'من أجل معالجة وتوصيل طلبك، نقوم بجمع اسمك ورقم هاتفك وعنوان التوصيل ومدينتك. تُشارك هذه المعلومات حصرياً مع شركاء التوصيل لدينا بغرض إتمام عملية التوصيل، ولا تُباع أو تُفصح عنها لأطراف ثالثة لأي غرض آخر. لا نقوم بجمع أو تخزين أي معلومات متعلقة بالدفع، حيث تُسوّى جميع الطلبات نقداً عند الاستلام.',
privacy_warning_text: 'تُعد الموافقة على شروط الخصوصية الخاصة بنا ضرورية لإتمام أي طلب، حيث تعتمد عملية التوصيل على المعلومات المذكورة أعلاه. يمكنك متابعة تصفح موقعنا دون الموافقة، إلا أن ميزة الطلب لن تكون متاحة لك.',
privacy_gate_text: 'لإتمام طلبك، يرجى الموافقة على شروط الخصوصية الخاصة بنا. نقوم بجمع اسمك ورقم هاتفك وعنوان التوصيل ومدينتك فقط لمعالجة وتوصيل طلبك — ولا تُباع هذه المعلومات أبداً.',
privacy_accept: 'موافق',
privacy_no: 'لا',
privacy_accept_terms: 'قبول الشروط',
privacy_continue_without: 'المتابعة دون الموافقة',
privacy_accept_anyway: 'الموافقة على أي حال',
review_write: '✍️ أضف تقييماً', review_name_ph: 'اسمك', review_phone_ph: 'الهاتف المستخدم في طلبك',
review_comment_ph: 'شاركنا تجربتك مع هذا المنتج', review_submit: 'إرسال التقييم',
review_fill_all: 'يرجى تعبئة جميع الحقول واختيار تقييم.', review_sending: 'جارٍ الإرسال...',
review_photo_too_large: 'الصورة كبيرة جداً (5 ميجابايت كحد أقصى).', review_success: 'شكراً! سيظهر تقييمك بعد الموافقة عليه.',
review_not_verified: 'لم نتمكن من التحقق من شراء هذا المنتج بهذا الرقم.', review_error: 'خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
    /* ── MODAL KEYS ── */
    modal_order_title: 'طلبك', modal_order_sub: 'راجع المنتج وحدد الكمية',
    modal_qty: 'الكمية', modal_purchase: 'شراء →',
    modal_details_title: 'بياناتك', modal_details_sub: 'أدخل معلومات التسليم',
    modal_name: 'الاسم الكامل', modal_city: 'المدينة', modal_city_other: 'يرجى تحديد مدينتك', modal_phone: 'رقم الهاتف',
    modal_email: 'البريد الإلكتروني (اختياري)', modal_address: 'العنوان الكامل', modal_payment_btn: 'الدفع →',
    modal_back: '← رجوع', modal_payment_title: 'طريقة الدفع',
    modal_payment_sub: 'تم اختيار طريقة الدفع',
    modal_cod: 'الدفع عند الاستلام', modal_cod_desc: 'ادفع عند وصول طلبك — لا حاجة لبطاقة',
    modal_confirm: 'تأكيد الطلب →', modal_success_title: 'تم تقديم الطلب!',
    modal_success_msg: 'شكراً! تم استلام طلبك. سيتواصل معك فريقنا قريباً.',
    modal_questions: 'أسئلة؟ واتساب:', modal_close: 'إغلاق',
    /* ── ABOUT PAGE ── */
    ab_badge: 'إلكترو بدر · الدار البيضاء',
    ab_hero_title: '40 عاماً من الإلكترونيات الموثوقة في المغرب',
    ab_hero_sub: 'من متجر صغير في الدار البيضاء إلى الوجهة الإلكترونية الأكثر ثقة في المغرب — نخدم العائلات منذ عام 1983.',
    ab_stat_years: 'سنة من الثقة', ab_stat_products: 'منتج', ab_stat_customers: 'عميل سعيد',
    ab_who: 'من نحن',
    ab_story: 'وُلد إلكترو بدر في الدار البيضاء عام 1883 كمحل متخصص في الساعات — شركة عائلية قائمة على اعتقاد بسيط: تستحق كل عائلة مغربية الحصول على ساعات عالية الجودة بأسعار عادلة.',
    ab_quote: '"لا نبيع الإلكترونيات فحسب — نبني علاقات تدوم لأجيال."',
    ab_quote_author: '— بدر، المؤسس',
    ab_journey: 'مسيرتنا',
    ab_why: 'لماذا تختارنا',
    ab_val1_title: 'الجودة أولاً', ab_val1_desc: 'كل منتج معتمد ومختبر قبل البيع. بدون تنازلات.',
    ab_val2_title: 'الدفع عند الاستلام', ab_val2_desc: 'ادفع فقط عند وصول طلبك بأمان.',
    ab_val3_title: 'توصيل سريع', ab_val3_desc: 'توصيل وطني في جميع أنحاء المغرب.',
    ab_val4_title: 'دائماً هنا', ab_val4_desc: 'دعم واتساب 24/7 — أشخاص حقيقيون وإجابات فورية.',
    ab_brands: 'العلامات التي نحملها',
    ab_visit: 'زورونا',
    ab_cta_title: 'تعال لزيارتنا في الدار البيضاء',
    ab_cta_sub: 'فريقنا مستعد دائماً لمساعدتك في إيجاد الجهاز المناسب. زر متجرنا أو اطلب عبر الإنترنت.',
    ab_shop_btn: '🛍 تسوق الآن', ab_wa_btn: '💬 واتساب',
    ab_contact: 'تواصل معنا',
    ab_phone_label: 'الهاتف', ab_email_label: 'البريد الإلكتروني',
    ab_location_label: 'الموقع', ab_hours_label: 'ساعات الدعم',
    ab_hours_val: '24/7 عبر واتساب',
    /* ── CONTACT PAGE ── */
    ct_badge: 'تواصل معنا',
    ct_hero_title: 'تحدث مع إلكترو بدر',
    ct_hero_sub: 'سواء كان سؤالاً عن طلب أو استفساراً عن التوصيل — فريقنا هنا دائماً من أجلك، 24/7.',
    ct_pill1: 'واتساب · الأسرع', ct_pill2: 'راسلنا بالبريد', ct_pill3: 'زيارة متجرنا', ct_pill4: 'اتصل بنا',
    ct_ch1_title: 'واتساب', ct_ch1_speed: 'رد في دقائق · 24/7', ct_ch1_btn: 'ابدأ المحادثة',
    ct_ch2_title: 'البريد الإلكتروني', ct_ch2_speed: 'رد خلال 24 ساعة', ct_ch2_btn: 'إرسال بريد',
    ct_ch3_title: 'زيارة المتجر', ct_ch3_val: 'إلكترو بدر، الدار البيضاء', ct_ch3_speed: 'تعال لزيارتنا شخصياً', ct_ch3_btn: 'الاتجاهات',
    ct_ch4_title: 'اتصل بنا', ct_ch4_speed: 'متاح من 10ص – 7م', ct_ch4_btn: 'اتصل الآن',
    ct_fastest: 'أسرع طريقة للتواصل معنا',
    ct_wa_title: 'راسلنا على واتساب', ct_wa_sub: 'نرد في دقائق — متاحون 24/7', ct_wa_btn: 'ابدأ المحادثة',
    ct_details: 'بيانات التواصل',
    ct_phone_label: 'الهاتف', ct_email_label: 'البريد الإلكتروني',
    ct_location_label: 'الموقع', ct_hours_label: 'ساعات الدعم', ct_hours_val: '24/7 عبر واتساب',
    ct_send: 'أرسل رسالة',
    ct_tab1: 'استفسار طلب', ct_tab2: 'دعم فني', ct_tab3: 'أخرى',
    ct_name_label: 'الاسم الكامل', ct_phone_field: 'رقم هاتفك',
    ct_email_field: 'بريدك الإلكتروني', ct_subject_label: 'الموضوع',
    ct_msg_label: 'رسالتك', ct_submit: 'إرسال الرسالة →',
    ct_faq: 'أسئلة شائعة',
    ct_faq1_q: 'كم يستغرق التوصيل؟', ct_faq1_a: 'عادةً 2 إلى 4 أيام عمل في جميع أنحاء المغرب.',
    ct_faq2_q: 'هل يمكنني الدفع عند الاستلام؟', ct_faq2_a: 'نعم — الدفع عند الاستلام متاح في جميع أنحاء المغرب.',
    ct_faq3_q: 'هل يمكنني إرجاع منتج؟', ct_faq3_a: 'تواصل معنا خلال 7 أيام من استلام طلبك.',
    ct_faq4_q: 'هل المنتجات مضمونة؟', ct_faq4_a: 'نعم — جميع المنتجات مختبرة ومعتمدة قبل التسليم.',
    /* ── NEW CATEGORY TITLES ── */
    cat_grooming: 'العناية الرجالية', cat_calculators: 'الآلات الحاسبة', cat_gadgets: 'أجهزة إلكترونية',

    /* ── SHOP PRODUCT NAMES & DESCRIPTIONS ── */
    /* ── SHOP PRODUCTS: POWER BANKS ── */
    p_powerbanks_1_name: 'SHtel شاحن متنقل 20000mAh 45W SP-32', p_powerbanks_1_desc: 'شاحن متنقل بسعة 20000mAh مع شحن سريع 45W، تدعم شحن الحاسوب المحمول. حجم مضغوط مع كابل Type-C مدمج وشاشة رقمية.',
    p_powerbanks_2_name: 'SHtel شاحن متنقل 20000mAh 22.5W SP-24', p_powerbanks_2_desc: 'شاحن متنقل بسعة 20000mAh مع شحن سريع بقوة 22.5W. كابلات Type-C و Lightning مدمجة، وشاشة رقمية تعرض النسبة المئوية.',
    p_powerbanks_3_name: 'SHtel شاحن متنقل 10000mAh 22.5W SP-90', p_powerbanks_3_desc: 'شاحن متنقل بسعة 10000mAh مع شحن سريع بقوة 22.5W. كابل USB-C مدمج، بالإضافة إلى منفذي USB-C و USB-A.',
    p_powerbanks_4_name: 'Konfulon شاحن متنقل مغناطيسي لاسلكي 10000mAh M22W', p_powerbanks_4_desc: 'شاحن متنقل مغناطيسي لاسلكي بشحن لاسلكي 15W وشحن PD بقوة 20W. مغناطيس قوي للمحاذاة، بالإضافة إلى منفذي USB و USB-C.',
    p_powerbanks_5_name: 'Xiaomi شاحن متنقل لاسلكي 20000mAh', p_powerbanks_5_desc: 'شاحن متنقل بسعة 20000mAh مع شحن لاسلكي 10W. منفذ USB-A بقوة 18W، بالإضافة إلى إخراج مزدوج USB-A و USB-C.',
    p_powerbanks_6_name: 'Oryx CUBE-10 شاحن متنقل لاسلكي 10000mAh', p_powerbanks_6_desc: 'شاحن متنقل مضغوط تعمل بالسلك واللاسلكي مع شحن لاسلكي 10W. شحن سريع عبر Type-C بقوة 18W بتصميم مربع متين.',
    p_powerbanks_7_name: 'Dinex شاحن متنقل بإضاءة LED 20000mAh X-200', p_powerbanks_7_desc: 'شاحن متنقل بسعة 20000mAh مع لوحة إضاءة LED مدمجة. شحن سريع بقوة 22.5W، شاشة LCD، وحزام حمل مدمج.',
    p_powerbanks_8_name: 'Dinex شاحن متنقل صغير 5000mAh A333', p_powerbanks_8_desc: 'شاحن متنقل صغير بمخرج 22.5W وإدخال/إخراج PD بقوة 20W. تتبدل بين Type-C و Lightning، وتتضمن حاملاً مخفياً.',
    p_powerbanks_9_name: 'Konfulon شاحن متنقل خارجي 100000mAh A45Q', p_powerbanks_9_desc: 'شاحن متنقل خارجي بسعة ضخمة مع شحن سريع PD بقوة 20W و22.5W. 6 منافذ إخراج مع شاشة LED، مناسبة للأجهزة اللوحية والهواتف.',
    p_powerbanks_10_name: 'Konfulon شاحن متنقل 70000mAh A66Q', p_powerbanks_10_desc: 'شاحن متنقل خارجي عالية السعة مع شحن سريع PD بقوة 30W و22.5W. 7 منافذ إخراج بالإضافة إلى كشاف LED مدمج.',
    /* ── SHOP PRODUCTS: SECURITY CAMERAS ── */
    p_cameras_1_name: 'كاميرا شمسية بالذكاء الاصطناعي 3 في 1 (سلسلة SPM-T)', p_cameras_1_desc: 'كاميرا مراقبة 4K تعمل بالطاقة الشمسية بثلاث عدسات في وحدة واحدة. اتصال 4G/واي فاي، تغطية 360°، ورؤية ليلية ملونة.',
    p_cameras_2_name: 'AOV كاميرا شمسية ذكية (4 عدسات)', p_cameras_2_desc: 'كاميرا ذكية تعمل بالطاقة الشمسية بأربع عدسات حقيقية ودقة Ultra HD بقوة 20MP. تخزين سحابي، اتصال صوتي، وتسجيل ملون نهاراً وليلاً.',
    p_cameras_3_name: 'كاميرا مراقبة خارجية شمسية بدقة HD', p_cameras_3_desc: 'كاميرا مراقبة خارجية تعمل بالطاقة الشمسية بدقة Ultra HD 4K ورؤية 360°. بطارية مدمجة، كشف حركة PIR، ومراقبة عبر 4G للمناطق النائية.',
    p_cameras_4_name: 'Hikvision كاميرا Turret ملونة بدقة 3K', p_cameras_4_desc: 'كاميرا داخلية بتصميم Turret بدقة 3K وتقنية الإضاءة الهجينة الذكية. فيديو ملون واضح نهاراً وليلاً بزاوية رؤية واسعة.',
    p_cameras_5_name: 'Imou كاميرا خارجية Bullet 2E', p_cameras_5_desc: 'كاميرا خارجية بتصميم Bullet بدقة 2K وكشف الأشخاص. كشاف يعمل بالحركة ورؤية ليلية ملونة ذكية.',
    p_cameras_6_name: 'TP-Link Tapo C212 كاميرا دوارة', p_cameras_6_desc: 'كاميرا منزلية دوارة (أفقياً وعمودياً) بدقة 2K وتتبع للحركة. كشف الأشخاص، صوت ثنائي الاتجاه، وتخزين محلي أو سحابي.',
    p_cameras_7_name: 'Ezviz H8c كاميرا منزلية ذكية', p_cameras_7_desc: 'كاميرا منزلية ذكية بدقة 1080p ورؤية بانورامية 360°. تتبع ذكي وتنبيه دفاعي فوري عند رصد أي حركة.',
    p_cameras_8_name: 'Hikvision كاميرا Bullet بتقنية ColorVu', p_cameras_8_desc: 'كاميرا خارجية بتصميم Bullet مزودة بتقنية ColorVu للإضاءة الهجينة الذكية. تسجيل ملون نهاراً وليلاً، وتصميم مقاوم للعوامل الجوية بمعيار IP67.',
    p_cameras_9_name: 'Hikvision كاميرا Bullet بتقنية Turbo HD', p_cameras_9_desc: 'كاميرا Bullet بدقة HD مزودة بتقنية HDTVI لصورة واضحة. مقاومة للعوامل الجوية بمعيار IP67 مع رؤية ليلية EXIR للاستخدام الخارجي.',
    p_cameras_10_name: 'Imou كاميرا Cruiser Dual 2 (10MP)', p_cameras_10_desc: 'كاميرا مراقبة خارجية بعدستين مزدوجتين ودقة إجمالية 10MP. كشف الأشخاص والمركبات مع أضواء تحذير حمراء وزرقاء.',
    /* ── SHOP PRODUCTS: SPEAKERS & RADIOS ── */
    p_speakers_1_name: 'Sing-e مكبر صوت للحفلات مزدوج 8 إنش', p_speakers_1_desc: 'مكبر صوت مزدوج بحجم 8 إنش بشبكة بتصميم مثمن. حلقات إضاءة RGB متعددة الألوان حول كل مكبر. شاشة LED لعرض الوقت في الأعلى؛ يشمل ميكروفوناً وجهاز تحكم عن بعد.',
    p_speakers_2_name: 'Sing-e مكبر صوت HiFi بقوة 50W ZQS8239', p_speakers_2_desc: 'مكبر صوت HiFi مزدوج بحجم 8 إنش بقدرة إخراج 50W. معالج صوت DSP مدمج وإضاءة LED ملونة على شكل حلقة. بطارية 7.4V بسعة 5000mAh؛ يشمل ميكروفوناً وجهاز تحكم عن بعد.',
    p_speakers_3_name: 'Sing-e مكبر صوت برجي مزدوج 10 إنش', p_speakers_3_desc: 'مكبر صوت مزدوج بحجم 10 إنش بصوت جهير عميق. مدخلا ميكروفون بالإضافة إلى مدخل غيتار/AUX للفنانين. منفذ USB، بطاقة TF، شاشة LED؛ يعمل بالتيار الكهربائي.',
    p_speakers_4_name: 'Avcrowns مكبر صوت بعجلات 15 إنش CH-8615', p_speakers_4_desc: 'مكبر صوت احترافي بعجلات بحجم 15 إنش وقدرة P.M.P.O تصل إلى 5500W. يشمل ميكروفونين لاسلكيين وجهاز تحكم عن بعد. اقتران TWS، منفذ USB، بطاقة TF، راديو FM، وإضاءة LED.',
    p_speakers_5_name: 'NNS راديو كلاسيكي بإضاءة RGB طراز NS-7069BT', p_speakers_5_desc: 'راديو AM/FM/موجة قصيرة مع شريط إضاءة RGB ملون. بلوتوث مع اقتران TWS، وتشغيل عبر USB وبطاقة TF. هوائي قابل للسحب ومقبض حمل علوي لسهولة التنقل.',
    p_speakers_6_name: 'NNS راديو وساعة نحاسية مخططة طراز NS-7211BT', p_speakers_6_desc: 'راديو AM/FM/موجة قصيرة بساعة تناظرية مدمجة. تشغيل عبر البلوتوث وUSB وبطاقة TF مع أزرار تحكم مخصصة. يعمل ببطارية 18650، ويشمل كابل شحن.',
    p_speakers_7_name: 'NNS راديو نحاسي مضغوط طراز NS-6655BT', p_speakers_7_desc: 'راديو AM/FM/موجة قصيرة بهيكل مضغوط بلمسات نحاسية. بلوتوث مع اقتران TWS، وتشغيل عبر USB وبطاقة TF. يعمل ببطارية 18650، ويشمل كابل شحن.',
    p_speakers_8_name: 'NNS راديو وساعة خشبية طراز NS-7116BT', p_speakers_8_desc: 'راديو AM/FM/موجة قصيرة بهيكل بلون خشبي دافئ. ساعة مدمجة، بلوتوث، وتشغيل عبر USB وبطاقة TF. يعمل ببطارية 18650، ويشمل كابل شحن.',
    p_speakers_9_name: 'Avcrowns مكبر صوت كاريوكي 12 إنش CH-126', p_speakers_9_desc: 'مكبر صوت كاريوكي قابل لإعادة الشحن بحجم 12 إنش وقدرة P.M.P.O تصل إلى 10000W. يشمل ميكروفونين لاسلكيين وجهاز تحكم عن بعد. منفذ USB، بطاقة TF، راديو FM، مدخل AUX، وإضاءة LED بألوان RGB.',
    p_speakers_10_name: 'Meier مكبر صوت بتصميم غرامافون كلاسيكي', p_speakers_10_desc: 'مكبر صوت بتصميم كلاسيكي على شكل غرامافون مع اتصال بلوتوث 5.4. يشغل راديو FM، USB، بطاقة TF، أو مدخل AUX. بطارية قابلة لإعادة الشحن؛ يشمل كابلي USB و AUX.',
    /* ── SHOP PRODUCTS: SMART WATCHES ── */
    p_watches_1_name: 'Smartbarry C90 MAX (ساعة ألترا بشبكة 4G)', p_watches_1_desc: 'ساعة ذكية تعمل بشبكة 4G بشاشة كبيرة مقاس 2.2 إنش وكاميرا مزدوجة بدقة Full HD. شحن مغناطيسي، ومتوافقة مع 3 مشغلي شبكات.',
    p_watches_2_name: 'Riversong Motive 10 GT', p_watches_2_desc: 'ساعة ذكية بنظام GPS بشاشة AMOLED مقاس 1.43 إنش وتحديد مواقع متعدد الأقمار الصناعية. مقاومة للماء بمعيار 3 ATM، مع سوار مغناطيسي إضافي.',
    p_watches_3_name: 'Smartbarry C006pro ساعة أطفال', p_watches_3_desc: 'ساعة ذكية للأطفال تدعم 5G بشاشة قابلة للفصل مقاس 2.01 إنش وكاميرا HD. مقاومة للماء بمعيار IP67، مع تحديد الموقع LBS، واتصال بالفيديو ودردشة صوتية.',
    p_watches_4_name: 'Black Shark A3', p_watches_4_desc: 'ساعة ذكية بشاشة HD مقاس 1.53 إنش وبطارية تدوم حتى 14 يوماً. تتتبع مؤشرات اللياقة البدنية بتصميم متين مناسب للاستخدام اليومي.',
    p_watches_5_name: 'Kieslect Kr3', p_watches_5_desc: 'ساعة ذكية بإطار من الفولاذ المقاوم للصدأ ونظام GPS ثنائي التردد بست أقمار صناعية. توليد أوجه ساعة مخصصة بالذكاء الاصطناعي.',
    p_watches_6_name: 'Kieslect Elite2', p_watches_6_desc: 'ساعة ذكية بإطار سيراميك مشطوف ونظام GPS ثنائي التردد مع ملاحة المسارات. مساعد صوتي بالذكاء الاصطناعي متصل بالإنترنت للتحكم دون استخدام اليدين.',
    p_watches_7_name: 'Mibro Lite3 Pro', p_watches_7_desc: 'ساعة ذكية بنظام GPS بشاشة AMOLED مع طقم سوارين من الجلد الطبيعي. تتتبع معدل ضربات القلب والنوم ومستوى الترطيب طوال اليوم.',
    p_watches_8_name: 'Riversong Motive 6 Pro', p_watches_8_desc: 'ساعة ذكية بشاشة لمس كاملة مقاس 1.83 إنش ومكالمات بلوتوث. أكثر من 100 وضع رياضي بالإضافة إلى قياس نسبة الأكسجين في الدم.',
    p_watches_9_name: 'Kieslect Elfin', p_watches_9_desc: 'ساعة ذكية فائقة النحافة بسمك 6mm وشاشة AMOLED بدقة HD مقاس 1.32 إنش. أوجه ساعة قابلة للتخصيص بالذكاء الاصطناعي لمظهر شخصي مميز.',
    p_watches_10_name: 'Kieslect Lora 3', p_watches_10_desc: 'ساعة ذكية معدنية فائقة النحافة بتصميم عصري للاستخدام اليومي. مراقبة صحية على مدار 24 ساعة مع مكالمات بلوتوث بلمسة واحدة.',
    /* ── SHOP PRODUCTS: BEAUTY & CARE ── */
    p_beauty_1_name: 'Braun Silk-épil 5 SensoSmart جهاز إزالة الشعر', p_beauty_1_desc: 'جهاز إزالة شعر للاستخدام الجاف والمبلل بتقنية SensoSmart لإزالة شعر لطيفة. إزالة فائقة النعومة تحافظ على نعومة البشرة حتى 4 أسابيع، مع ملحقين إضافيين.',
    p_beauty_2_name: 'Sokany مكواة فرد شعر سيراميك SK-993', p_beauty_2_desc: 'مكواة فرد شعر للاستخدام الجاف والمبلل بألواح سيراميك ونانو فضة. تسخن حتى 400°C لنتيجة احترافية بمستوى الصالونات.',
    p_beauty_3_name: 'DSP مكواة بخار لامعة 10242', p_beauty_3_desc: 'مكواة فرد بالبخار بألواح ألومنيوم لنتيجة ناعمة ولامعة. شاشة LED رقمية مع ترطيب بالبروتين والكيراتين من تمريرة واحدة.',
    p_beauty_4_name: 'Enzo Professional فرشاة تصفيف ومنح حجم بخطوة واحدة PLUS', p_beauty_4_desc: 'فرشاة تصفيف بالهواء الساخن تجفف الشعر وتمنحه الحجم في خطوة واحدة. إعدادات حرارة متعددة مع نفخة هواء بارد لتثبيت التسريحة.',
    p_beauty_5_name: 'Enzo Professional فرشاة سحرية 2 في 1', p_beauty_5_desc: 'تجفف الشعر وتفرده في آن واحد بفضل فرشاة دوارة. تأتي مع حقيبة سفر لسهولة التخزين.',
    p_beauty_6_name: 'BaByliss مكواة تجعيد 19mm', p_beauty_6_desc: 'مكواة تجعيد بقطر 19mm لتجعيدات وموجات محددة وطويلة الثبات. حرارة متحكم بها حتى 210°C لتصفيف مثالي.',
    /* ── SHOP PRODUCTS: MEN'S GROOMING ── */
    p_grooming_1_name: 'ماكينة حلاقة اللحية Kemei 1677', p_grooming_1_desc: 'ماكينة حلاقة لحية دقيقة بإعدادات طول من 0 إلى 7mm. شفرات ذاتية الشحذ تحافظ على حدتها مع الاستخدام المنتظم. شحن عبر USB-C يوفر حتى 4 ساعات من الاستخدام.',
    p_grooming_2_name: 'Philips One Blade 360', p_grooming_2_desc: 'ماكينة حلاقة دوارة برؤوس عائمة ثلاثية الأبعاد لحلاقة قريبة من الجلد. للاستخدام الجاف أو المبلل، مع مقص تشذيب قابل للطي للتفاصيل الدقيقة. شحنة واحدة توفر حتى 60 دقيقة من الاستخدام.',
    p_grooming_3_name: 'Oraimo ماكينة حلاقة كهربائية', p_grooming_3_desc: 'رؤوس حلاقة دوارة تنزلق بسلاسة لحلاقة قريبة من الجلد. للاستخدام الجاف أو المبلل، مع مقص تشذيب قابل للطي للسوالف والشارب. تشحن عبر USB-C بسهولة ودون الحاجة لأسلاك إضافية.',
    p_grooming_4_name: 'Braun طقم مقص شعر', p_grooming_4_desc: 'طقم مقص شعر بشفرة من الفولاذ المقاوم للصدأ المتين. يشمل 4 أمشاط توجيه لأطوال قص مختلفة. شحن عبر USB-C ومحرك منخفض الضجيج للاستخدام اليومي.',
        p_grooming_5_name: 'Kemei KM-320B ماكينة تشذيب الجسم', p_grooming_5_desc: 'ماكينة تشذيب شعر الجسم بشفرة فولاذ كربوني متينة لأداء حاد وطويل الأمد. تصميم مقاوم للماء IPX4 يسهل تنظيفه بعد الاستخدام. تأتي مع مشط توجيه وفرشاة تنظيف وكابل شحن USB.',
    p_grooming_6_name: 'Kemei KM-8536 طقم مقص وماكينة تشذيب', p_grooming_6_desc: 'طقم عناية احترافي من قطعتين يضم مقص شعر وماكينة تشذيب، كلاهما بسرعة 9000 دورة في الدقيقة. شفرات مطلية بالسيراميك مع شاشة LCD تعرض مستوى البطارية. حتى 240 دقيقة من الاستخدام بشحنة كاملة.',
    p_grooming_7_name: 'Kemei KM-2024 ماكينة حلاقة بشبكة', p_grooming_7_desc: 'ماكينة حلاقة كلاسيكية بشبكة مزدوجة لحلاقة حادة وقريبة من الجلد. تصميم الرأس المتأرجح بزاوية 12° لتحديد سلس. مقاومة للماء IPX4 مع شحن USB وقفل سفر للحزم الآمن.',
    p_grooming_8_name: 'Philips OneBlade ماكينة تشذيب للمناطق الحساسة', p_grooming_8_desc: 'ماكينة حلاقة وتشذيب للمناطق الحساسة بشفرة SkinProtect المصممة لمزيد من اللطف. تشمل مشط تحكم في الطول وقفاز تقشير لنتيجة أكثر نعومة.',
    p_grooming_9_name: 'Kemei KM-277 طقم عناية 3 في 1', p_grooming_9_desc: 'طقم عناية 3 في 1 يغطي الشعر والوجه والجسم في جهاز واحد. يشمل ملحق تشذيب الأنف والأذن بالإضافة إلى رأس حلاقة للجسم. قابل لإعادة الشحن عبر USB بشفرة احترافية مزدوجة الاستخدام.',
    /* ── SHOP PRODUCTS: CLOCKS & ALARMS ── */
    p_wallwatch_1_name: 'Rhythm منبه كوارتز (ذهبي)', p_wallwatch_1_desc: 'منبه بحركة الكوارتز بأرقام وعقارب مضيئة في الظلام. تصميم مضغوط لطاولة السرير مع مفتاح تشغيل وإيقاف بسيط للمنبه.',
    p_wallwatch_2_name: 'Rhythm منبه كوارتز (أسود)', p_wallwatch_2_desc: 'منبه بحركة الكوارتز بأرقام وعقارب مضيئة في الظلام. تصميم مضغوط لطاولة السرير مع مفتاح تشغيل وإيقاف بسيط للمنبه.',
    p_wallwatch_3_name: 'Rhythm منبه (أزرق)', p_wallwatch_3_desc: 'منبه تناظري مضغوط بمينا أبيض واضح. حركة كوارتز بسيطة وموثوقة للاستخدام اليومي على طاولة السرير.',
    p_wallwatch_4_name: 'منبه بحركة صامتة 3567', p_wallwatch_4_desc: 'منبه تناظري بحركة صامتة تماماً دون صوت تكتكة. جرس إنذار بنغمتين وإضاءة ليلية مدمجة.',
    p_wallwatch_5_name: 'ساعة رقمية LED طراز GS-5308', p_wallwatch_5_desc: 'ساعة رقمية LED بأرقام كبيرة وواضحة سهلة القراءة. منبه مدمج مع مؤشر صباحاً/مساءً.',
    /* ── SHOP PRODUCTS: PHONE ACCESSORIES ── */
    p_phones_1_name: 'DINEX شاحن سريع Type C بقوة 50W', p_phones_1_desc: 'شاحن سريع بقوة 50W بخيارات شحن متعددة. تقنية ذكية تضمن شحناً آمناً. مثالي لتشغيل أجهزة متعددة.',
    p_phones_2_name: 'Dinex كابل شحن 100W 3m', p_phones_2_desc: 'كابل شحن USB-C عالي السرعة بقوة 100W. تصميم متين لاستخدام طويل الأمد. مثالي للهواتف والأجهزة اللوحية وأجهزة الحاسوب المحمولة.',
    p_phones_3_name: 'Dinex شاحن سريع Lightning بقوة 20W', p_phones_3_desc: 'شاحن سريع بقوة 20W مع كابل Lightning مرفق. تصميم مضغوط مناسب للمنزل أو السفر. شحن يومي آمن وموثوق.',
    p_phones_4_name: 'Dinex حامل هاتف للسيارة', p_phones_4_desc: 'حامل هاتف قابل للتعديل بدوران 360°. يوفر تثبيتاً آمناً وثابتاً. مثالي للقيادة والاستخدام دون استعمال اليدين.',
    p_phones_5_name: 'SHtel كابل Type C بقوة 3.4A', p_phones_5_desc: 'شحن سريع بقوة 3.4A مع نقل بيانات موثوق. تصميم متين مخصص للاستخدام اليومي. متوافق مع معظم أجهزة USB-C.',
    p_phones_6_name: 'Dinex كابل شحن سريع 3.0A', p_phones_6_desc: 'كابل Lightning متين للشحن والمزامنة. يوفر أداءً سريعاً وثابتاً. مصمم لأجهزة Apple.',
    p_phones_7_name: 'Xiaomi شاحن سريع بقوة 120W', p_phones_7_desc: 'شاحن GaN فائق السرعة بقوة 120W بتصميم مضغوط. يوفر شحناً قوياً وفعالاً. مثالي لأجهزة USB-C المتوافقة.',
    p_phones_8_name: 'Oraimo شاحن Lightning بقوة 20W', p_phones_8_desc: 'شاحن موثوق بقوة 24W مع كابل شحن مرفق. تزويد بالطاقة سريع وآمن وفعال. مثالي لاحتياجات الشحن اليومية.',
    p_phones_9_name: 'Dinex محول Type C طاقة 4OW', p_phones_9_desc: 'شاحن سريع مضغوط بقوة 40W للاستخدام اليومي. يوفر أداء شحن آمناً وثابتاً. متوافق مع أجهزة USB-C.',
    p_phones_10_name: 'Plokama حامل ثلاثي وعصا سيلفي', p_phones_10_desc: 'حامل ثلاثي القوائم ثابت وخفيف الوزن للصور والفيديوهات. ارتفاع قابل للتعديل برأس دوار 360°. مثالي للكاميرات والهواتف الذكية.',
    /* ── SHOP PRODUCTS: ANDROID BOXES ── */
    p_android_1_name: 'D-Plus D96 جهاز أندرويد تي في', p_android_1_desc: 'جهاز تلفاز أندرويد 14 بدقة 8K Ultra HD وواي فاي 6. مساعد جوجل مدمج، ويدعم Netflix وYouTube وPrime Video.',
    p_android_2_name: 'Xiaomi عصا تلفاز ذكية 4K', p_android_2_desc: 'عصا تلفاز أندرويد صغيرة بدقة 4K مع مساعد جوجل مدمج. تأتي مع تطبيقات Netflix وPrime Video وYouTube مثبتة مسبقاً.',
    p_android_3_name: 'Xiaomi جهاز تلفاز TV S (الجيل الثالث)', p_android_3_desc: 'جهاز Google TV بدقة إخراج 4K Ultra-HD وChromecast مدمج. يشمل الوصول إلى Netflix وPrime Video وGoogle Play.',
    p_android_4_name: 'Senic H96 Max جهاز أندرويد', p_android_4_desc: 'جهاز تلفاز أندرويد 11 بدقة إخراج 4K HDR Ultra HD. تصميم مضغوط مع جهاز تحكم عن بعد بسيط.',
    p_android_5_name: 'Vectron VBox Alpha', p_android_5_desc: 'جهاز تلفاز أندرويد 12 بواي فاي 5G ومعالج رباعي النواة Allwinner H313. يوفر دقة 4K Ultra HD مع Netflix وYouTube وPrime Video.',
    p_android_6_name: 'Senic X98Q جهاز أندرويد', p_android_6_desc: 'جهاز تلفاز أندرويد 12 بدقة إخراج 8K Ultra HD. منفذا USB 3.0 مزدوجان بالإضافة إلى فتحة بطاقة TF للتخزين.',
    p_android_7_name: 'Tanix A3 جهاز أندرويد', p_android_7_desc: 'جهاز تلفاز أندرويد 11 بدقة 4K Ultra HD ودعم HDR. واي فاي ثنائي التردد 2.4G/5G مع معالج رباعي النواة.',
    p_android_8_name: 'Echolink S400B جهاز أندرويد', p_android_8_desc: 'جهاز تلفاز أندرويد بدقة 4K Ultra HD مع مساعد جوجل مدمج. يدعم Netflix وDisney+ وHBO Max وPlex.',
    /* ── SHOP PRODUCTS: CALCULATORS ── */
    p_calculators_1_name: 'Texas Instruments TI-Nspire CX II-T CAS', p_calculators_1_desc: 'آلة حاسبة بيانية بنظام الجبر الحاسوبي CAS وشاشة ملونة. تدعم لغة بايثون، ومعتمدة لامتحانات الباكالوريا والجامعة.',
    p_calculators_2_name: 'NumWorks آلة حاسبة بيانية', p_calculators_2_desc: 'آلة حاسبة بيانية بوضع خاص للامتحانات وتطبيق بايثون مدمج. شاشة لمس ملونة، من تصميم شركة فرنسية.',
    p_calculators_3_name: 'Casio Graph Math+ CLASSW40', p_calculators_3_desc: 'آلة حاسبة بيانية بوضع للامتحانات ودعم لغة بايثون. شاشة ملونة مناسبة للثانوية والجامعة، بضمان 3 سنوات.',
    p_calculators_4_name: 'Casio fx-991ES PLUS (الإصدار الثاني)', p_calculators_4_desc: 'آلة حاسبة علمية بـ417 دالة وعرض طبيعي يحاكي الكتاب المدرسي. تعمل بالطاقة الشمسية والبطارية، غير قابلة للبرمجة.',
    p_calculators_5_name: 'Deli D991ES PLUS آلة حاسبة علمية', p_calculators_5_desc: 'آلة حاسبة علمية بـ417 دالة وعرض على طريقة الكتاب المدرسي. تعمل بالطاقة الشمسية والبطارية، بضمان 3 سنوات.',
    p_calculators_6_name: 'Casio fx-82ES PLUS (الإصدار الثاني)', p_calculators_6_desc: 'آلة حاسبة علمية بـ252 دالة وعرض طبيعي يحاكي الكتاب المدرسي. تعمل ببطارية AAA، غير قابلة للبرمجة.',
    p_calculators_7_name: 'Casio fx-92 Collège ClassWiz', p_calculators_7_desc: 'آلة حاسبة علمية بـ417 دالة مخصصة لتلاميذ الإعدادي والثانوي. شاشة عالية الدقة، معتمدة للامتحانات وفق النظام الفرنسي.',
    /* ── SHOP PRODUCTS: ELECTRONIC GADGETS ── */
    p_gadgets_1_name: 'حزام رياضي للذراع 360°', p_gadgets_1_desc: 'حزام رياضي للذراع قابل للتعديل 360° للهواتف من 4 إلى 7 إنش. إغلاق مزدوج آمن، وحزام مطاطي مريح.',
    p_gadgets_2_name: 'Aerbes كشاف LED شمسي بقوة 400W', p_gadgets_2_desc: 'كشاف إضاءة LED شمسي بقوة 400W بلوح شمسي قابل للفصل. مقاوم للماء بمعيار IP67 مع جهاز تحكم عن بعد لاسلكي.',
    p_gadgets_3_name: 'جهاز قياس ضغط الدم الإلكتروني من الذراع', p_gadgets_3_desc: 'جهاز قياس ضغط الدم من الذراع بقياس ذكي. يعرض الضغط الانقباضي والانبساطي ومعدل النبض، بذاكرة تخزن 120 قراءة.',
    p_gadgets_4_name: 'طقم مصابيح LED يدوية (قطعتان)', p_gadgets_4_desc: 'طقم من مصباحين LED يدويين بقوة إضاءة 1200 لومن وخاصية التكبير. قابلان لإعادة الشحن عبر USB ببطاريات 18650، ومقاومان للماء بمعيار IPX4.',
    p_gadgets_5_name: 'مثبت جيمبال بتتبع الذكاء الاصطناعي Q625', p_gadgets_5_desc: 'مثبت جيمبال بتتبع بالذكاء الاصطناعي مع تتبع تلقائي للوجه. دوران 360°، توازن تلقائي، ودعم لحامل ثلاثي القوائم.',
    p_gadgets_6_name: 'TL16 مروحة تبريد بمشبك للهاتف', p_gadgets_6_desc: 'مروحة تبريد للهاتف بمشبك تثبيت لتبديد الحرارة بسرعة. تعمل بهدوء مع إضاءة RGB ملونة.',
    p_gadgets_7_name: 'DuraM مكبر صوت بلوتوث مضيء RGB', p_gadgets_7_desc: 'مكبر صوت بلوتوث محمول بتصميم مضيء بألوان RGB. صوت جهير قوي ومدة تشغيل طويلة.',
    p_gadgets_8_name: 'Celet سوار لياقة ذكي', p_gadgets_8_desc: 'سوار ذكي يتتبع معدل ضربات القلب والنوم وعدد الخطوات. سوار شبكي أنيق متوفر باللون الأسود أو الذهبي أو الفضي.',
    p_gadgets_9_name: 'SUITU مكنسة كهربائية يدوية', p_gadgets_9_desc: 'مكنسة كهربائية يدوية مضغوطة ولاسلكية بقوة شفط 6000 باسكال. شحن سريع عبر Type-C، مناسبة للسيارة أو المنزل.',
    p_gadgets_10_name: 'Intelli System جهاز قياس ضغط الدم من المعصم', p_gadgets_10_desc: 'جهاز قياس ضغط الدم من المعصم بقياس ذكي. تسجيل في الذاكرة، وضع مستخدمين اثنين، وإعلان صوتي للنتائج.',
  }
};


function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  set('nav-home', t.home); set('nav-shop', t.shop); set('nav-about', t.about); set('nav-contact', t.contact);

  const si = document.getElementById('searchInput');
  if (si) si.placeholder = t.search_placeholder;

  document.querySelectorAll('.hero-line1').forEach(el => el.innerText = t.hero_line1);
  document.querySelectorAll('.hero-line2').forEach(el => el.innerText = t.hero_line2);
  document.querySelectorAll('.hero-line3').forEach(el => el.innerText = t.hero_line3);
  document.querySelectorAll('.hero-desc').forEach(el => el.innerText = t.hero_desc);

  const hb1 = document.querySelector('.hero-hover-btn--primary');
  const hb2 = document.querySelector('.hero-hover-btn--secondary');
  if (hb1) hb1.innerText = t.hero_btn1;
  if (hb2) hb2.innerText = t.hero_btn2;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerText = t[key];
  });

  const featCards = document.querySelectorAll('.feature-card');
  const featData = [
    { title: t.feat1_title, desc: t.feat1_desc },
    { title: t.feat2_title, desc: t.feat2_desc },
    { title: t.feat3_title, desc: t.feat3_desc },
    { title: t.feat4_title, desc: t.feat4_desc },
  ];
  featCards.forEach((card, i) => {
    if (!featData[i]) return;
    const h3 = card.querySelector('h3'); const p = card.querySelector('p');
    if (h3) h3.innerText = featData[i].title;
    if (p)  p.innerText  = featData[i].desc;
  });

  const cartTotal = document.querySelector('.cart-total-row span:first-child');
  if (cartTotal) cartTotal.innerText = t.cart_total;
  updateCartCheckoutLabel();
(function () {
  const bar = document.getElementById('bestsellersBar');
  const track = document.getElementById('bestsellersTrack');
  if (!bar || !track) return;

  const SPEED = 0.6;
  const RESUME_DELAY = 1500;
  let isDown = false, startX = 0, startScroll = 0, resumeTimer = null, paused = false, halfWidth = 0;

  function measure() { halfWidth = track.scrollWidth / 2; }

  function cloneOnce() {
    if (track.dataset.cloned) return;
    const originals = Array.from(track.children);
    originals.forEach(card => track.appendChild(card.cloneNode(true)));
    track.dataset.cloned = 'true';
    measure();
  }
  cloneOnce();
  window.addEventListener('load', measure);
  window.addEventListener('resize', measure);

  function wrap() {
    if (halfWidth <= 0) return;
    if (bar.scrollLeft >= halfWidth) bar.scrollLeft -= halfWidth;
    else if (bar.scrollLeft <= 0) bar.scrollLeft += halfWidth;
  }

  function pause() {
    paused = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, RESUME_DELAY);
  }

  function tick() {
    if (!paused && !isDown) { bar.scrollLeft += SPEED; wrap(); }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  bar.addEventListener('mousedown', e => {
    isDown = true; bar.classList.add('dragging');
    startX = e.pageX; startScroll = bar.scrollLeft;
    pause(); e.preventDefault();
  });
  window.addEventListener('mousemove', e => {
    if (!isDown) return;
    bar.scrollLeft = startScroll - (e.pageX - startX);
    wrap();
  });
  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false; bar.classList.remove('dragging'); pause();
  });

  bar.addEventListener('touchstart', pause, { passive: true });
  bar.addEventListener('touchmove', () => { wrap(); pause(); }, { passive: true });
  bar.addEventListener('touchend', pause);

  bar.addEventListener('click', pause);

  bar.addEventListener('wheel', e => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    bar.scrollLeft += e.deltaY;
    wrap(); pause();
  }, { passive: false });

  bar.addEventListener('scroll', wrap);
})();
  /* ── ABOUT PAGE ── */
  const setT = (sel, val) => { const el = document.querySelector(sel); if (el && val) el.innerText = val; };
  const setP = (sel, val) => { const el = document.querySelector(sel); if (el && val) el.placeholder = val; };

  setT('.ab-badge', t.ab_badge);
  setT('.ab-hero h1', t.ab_hero_title);
  setT('.ab-hero-sub', t.ab_hero_sub);
  setT('.ab-section-label[data-ab="who"]', t.ab_who);
  setT('.ab-quote-text', t.ab_quote);
  setT('.ab-quote-author', t.ab_quote_author);
  setT('.ab-section-label[data-ab="journey"]', t.ab_journey);
  setT('.ab-section-label[data-ab="why"]', t.ab_why);
  setT('.ab-section-label[data-ab="brands"]', t.ab_brands);
  setT('.ab-section-label[data-ab="visit"]', t.ab_visit);
  setT('.ab-cta-title', t.ab_cta_title);
  setT('.ab-cta-sub', t.ab_cta_sub);
  setT('.ab-section-label[data-ab="contact"]', t.ab_contact);

  const abPills = document.querySelectorAll('.ab-stat-pill');
  if (abPills[0]) abPills[0].querySelector('.ab-stat-lbl').innerText = t.ab_stat_years;
  if (abPills[1]) abPills[1].querySelector('.ab-stat-lbl').innerText = t.ab_stat_products;
  if (abPills[2]) abPills[2].querySelector('.ab-stat-lbl').innerText = t.ab_stat_customers;

  const abVals = document.querySelectorAll('.ab-val');
  const abValData = [
    { name: t.ab_val1_title, desc: t.ab_val1_desc },
    { name: t.ab_val2_title, desc: t.ab_val2_desc },
    { name: t.ab_val3_title, desc: t.ab_val3_desc },
    { name: t.ab_val4_title, desc: t.ab_val4_desc },
  ];
  abVals.forEach((card, i) => {
    if (!abValData[i]) return;
    const n = card.querySelector('.ab-val-name'); const d = card.querySelector('.ab-val-desc');
    if (n) n.innerText = abValData[i].name;
    if (d) d.innerText = abValData[i].desc;
  });

  const abContacts = document.querySelectorAll('.ab-contact-card');
  const abContactLabels = [t.ab_phone_label, t.ab_email_label, t.ab_location_label, t.ab_hours_label];
  abContacts.forEach((card, i) => {
    const lbl = card.querySelector('.ab-contact-label');
    if (lbl && abContactLabels[i]) lbl.innerText = abContactLabels[i];
  });

  const abShopBtn = document.querySelector('.ab-btn:not(.ab-btn-ghost)');
  const abWaBtn   = document.querySelector('.ab-btn.ab-btn-ghost');
  if (abShopBtn) abShopBtn.innerText = t.ab_shop_btn;
  if (abWaBtn)   abWaBtn.innerText   = t.ab_wa_btn;

  const abHoursVal = document.querySelector('.ab-contact-card:last-child .ab-contact-val');
  if (abHoursVal) abHoursVal.innerText = t.ab_hours_val;

  /* ── CONTACT PAGE ── */
  setT('.ct-badge', t.ct_badge);
  setT('.ct-hero h1', t.ct_hero_title);
  setT('.ct-hero-sub', t.ct_hero_sub);

  const ctPills = document.querySelectorAll('.ct-cpill span');
  const ctPillTexts = [t.ct_pill1, t.ct_pill2, t.ct_pill3, t.ct_pill4];
  ctPills.forEach((pill, i) => { if (ctPillTexts[i]) pill.innerText = ctPillTexts[i]; });

  const ctCards = document.querySelectorAll('.ct-ch');
  if (ctCards[0]) {
    const t1 = ctCards[0].querySelector('.ct-ch-title'); if (t1) t1.innerText = t.ct_ch1_title;
    const s1 = ctCards[0].querySelector('.ct-ch-speed'); if (s1) s1.innerText = t.ct_ch1_speed;
    const b1 = ctCards[0].querySelector('.ct-ch-btn');   if (b1) b1.innerText = t.ct_ch1_btn;
  }
  if (ctCards[1]) {
    const t2 = ctCards[1].querySelector('.ct-ch-title'); if (t2) t2.innerText = t.ct_ch2_title;
    const s2 = ctCards[1].querySelector('.ct-ch-speed'); if (s2) s2.innerText = t.ct_ch2_speed;
    const b2 = ctCards[1].querySelector('.ct-ch-btn');   if (b2) b2.innerText = t.ct_ch2_btn;
  }
  if (ctCards[2]) {
    const t3 = ctCards[2].querySelector('.ct-ch-title'); if (t3) t3.innerText = t.ct_ch3_title;
    const v3 = ctCards[2].querySelector('.ct-ch-val');   if (v3) v3.innerText = t.ct_ch3_val;
    const s3 = ctCards[2].querySelector('.ct-ch-speed'); if (s3) s3.innerText = t.ct_ch3_speed;
    const b3 = ctCards[2].querySelector('.ct-ch-btn');   if (b3) b3.innerText = t.ct_ch3_btn;
  }
  if (ctCards[3]) {
    const t4 = ctCards[3].querySelector('.ct-ch-title'); if (t4) t4.innerText = t.ct_ch4_title;
    const s4 = ctCards[3].querySelector('.ct-ch-speed'); if (s4) s4.innerText = t.ct_ch4_speed;
    const b4 = ctCards[3].querySelector('.ct-ch-btn');   if (b4) b4.innerText = t.ct_ch4_btn;
  }

  setT('.ct-wa-title', t.ct_wa_title);
  setT('.ct-wa-sub',   t.ct_wa_sub);
  setT('.ct-wa-btn',   t.ct_wa_btn);

  const ctInfoRows = document.querySelectorAll('.ct-info-row');
  const ctInfoLabels = [t.ct_phone_label, t.ct_email_label, t.ct_location_label, t.ct_hours_label];
  ctInfoRows.forEach((row, i) => {
    const lbl = row.querySelector('.ct-info-label');
    if (lbl && ctInfoLabels[i]) lbl.innerText = ctInfoLabels[i];
  });
  const ctHoursVal = document.querySelector('.ct-info-row:last-of-type .ct-info-val');
  if (ctHoursVal) ctHoursVal.innerText = t.ct_hours_val;

  setT('.ct-submit', t.ct_submit);
  setP('#ct-name',    t.ct_name_label);
  setP('#ct-phone',   t.ct_phone_field);
  setP('#ct-email',   t.ct_email_field);
  setP('#ct-subject', t.ct_subject_label);
  setP('#ct-message', t.ct_msg_label);
  setP('#reviewName', t.review_name_ph);
  setP('#reviewPhone', t.review_phone_ph);
  setP('#reviewComment', t.review_comment_ph);

  const ctSectionLabels = document.querySelectorAll('.ct-section-label');
  if (ctSectionLabels[0]) ctSectionLabels[0].innerText = t.ct_fastest;
  if (ctSectionLabels[1]) ctSectionLabels[1].innerText = t.ct_details;
  if (ctSectionLabels[2]) ctSectionLabels[2].innerText = t.ct_send;
  if (ctSectionLabels[3]) ctSectionLabels[3].innerText = t.ct_faq;

  const ctTabs = document.querySelectorAll('.ct-tab');
  if (ctTabs[0]) ctTabs[0].innerText = t.ct_tab1;
  if (ctTabs[1]) ctTabs[1].innerText = t.ct_tab2;
  if (ctTabs[2]) ctTabs[2].innerText = t.ct_tab3;

  const ctFaqItems = document.querySelectorAll('.ct-faq-item');
  const ctFaqData = [
    { q: t.ct_faq1_q, a: t.ct_faq1_a },
    { q: t.ct_faq2_q, a: t.ct_faq2_a },
    { q: t.ct_faq3_q, a: t.ct_faq3_a },
    { q: t.ct_faq4_q, a: t.ct_faq4_a },
  ];
  ctFaqItems.forEach((item, i) => {
    if (!ctFaqData[i]) return;
    const q = item.querySelector('.ct-faq-q'); const a = item.querySelector('.ct-faq-a');
    if (q) q.innerText = ctFaqData[i].q;
    if (a) a.innerText = ctFaqData[i].a;
  });

  /* ── SHOP BUTTONS ── */
  document.querySelectorAll('.btn-cart').forEach(btn => { btn.innerText = t.shop_add_cart; });
  document.querySelectorAll('.btn-order').forEach(btn => { btn.innerText = t.shop_order_now; });

    sessionStorage.setItem('language', lang);
  updateDeliveryFee();

  const privacyPopupEl = document.getElementById('privacyPopup');
  if (privacyPopupEl && privacyPopupEl.classList.contains('active') && currentPrivacyMode) {
    renderPrivacyPopup(currentPrivacyMode);
  }
}

let currentDetailImages = [];
let currentDetailIndex = 0;

function openProductDetail(card) {
  const img = card.querySelector('.shop-card-img');
  const name = card.querySelector('h3').textContent;
  const price = card.querySelector('.price').textContent;
  const desc = card.querySelector('.desc').textContent;
  const cartBtn = card.querySelector('.btn-cart');
  const orderBtn = card.querySelector('.btn-order');
  const extraImages = card.dataset.extraImages ? card.dataset.extraImages.split(',') : [];

  document.getElementById('detailName').textContent = name;
  document.getElementById('detailPrice').textContent = price;
  document.getElementById('detailDesc').textContent = desc;

  currentDetailImages = [img.src, ...extraImages];
  currentDetailIndex = 0;
  renderDetailImage();

  const thumbsContainer = document.getElementById('detailThumbs');
  const dotsContainer = document.getElementById('detailDots');
  const prevBtn = document.getElementById('detailPrevBtn');
  const nextBtn = document.getElementById('detailNextBtn');
  thumbsContainer.innerHTML = '';
  dotsContainer.innerHTML = '';

  const hasMultiple = currentDetailImages.length > 1;
  thumbsContainer.style.display = hasMultiple ? 'flex' : 'none';
  dotsContainer.style.display = hasMultiple ? 'flex' : 'none';
  prevBtn.style.display = hasMultiple ? 'block' : 'none';
  nextBtn.style.display = hasMultiple ? 'block' : 'none';

  if (hasMultiple) {
    currentDetailImages.forEach((src, i) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.addEventListener('click', () => { currentDetailIndex = i; renderDetailImage(); });
      thumbsContainer.appendChild(thumb);

      const dot = document.createElement('span');
      dot.className = 'detail-dot';
      dotsContainer.appendChild(dot);
    });
  }

    document.getElementById('detailCartBtn').onclick = () => {
    allowDirectClick = true;
    cartBtn.click();
    allowDirectClick = false;
  };
  document.getElementById('detailOrderBtn').onclick = () => {
    document.getElementById('productDetailModal').classList.remove('active');
    allowDirectClick = true;
    orderBtn.click();
    allowDirectClick = false;
  };

  document.getElementById('productDetailModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderDetailImage() {
  document.getElementById('detailMainImg').src = currentDetailImages[currentDetailIndex];
  document.querySelectorAll('#detailThumbs img').forEach((t, i) => t.classList.toggle('active-thumb', i === currentDetailIndex));
  document.querySelectorAll('#detailDots .detail-dot').forEach((d, i) => d.classList.toggle('active-dot', i === currentDetailIndex));
}

function showNextDetailImage() {
  if (currentDetailImages.length <= 1) return;
  currentDetailIndex = (currentDetailIndex + 1) % currentDetailImages.length;
  renderDetailImage();
}

function showPrevDetailImage() {
  if (currentDetailImages.length <= 1) return;
  currentDetailIndex = (currentDetailIndex - 1 + currentDetailImages.length) % currentDetailImages.length;
  renderDetailImage();
}
let allowDirectClick = false;
let selectedRating = 0;

document.addEventListener('DOMContentLoaded', () => {
     document.querySelectorAll('.shop-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (allowDirectClick) return;
      e.stopPropagation();
      e.preventDefault();
      openProductDetail(card);
    }, true);
  });
  document.getElementById('detailClose')?.addEventListener('click', () => {
    document.getElementById('productDetailModal').classList.remove('active');
    document.body.style.overflow = '';
  });

  document.getElementById('detailNextBtn')?.addEventListener('click', showNextDetailImage);
  document.getElementById('detailPrevBtn')?.addEventListener('click', showPrevDetailImage);

  let touchStartX = 0;
  const mainImg = document.getElementById('detailMainImg');
  if (mainImg) {
    mainImg.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    mainImg.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 40) { diff > 0 ? showNextDetailImage() : showPrevDetailImage(); }
    }, { passive: true });
  }

  document.getElementById('reviewToggleBtn')?.addEventListener('click', () => {
    const form = document.getElementById('reviewForm');
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
  });

  document.querySelectorAll('#reviewStars .star').forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.value);
      document.querySelectorAll('#reviewStars .star').forEach(s => {
        s.classList.toggle('star-filled', parseInt(s.dataset.value) <= selectedRating);
      });
    });
  });

  document.getElementById('reviewSubmitBtn')?.addEventListener('click', submitReview);
});

async function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const phone = document.getElementById('reviewPhone').value.trim();
  const comment = document.getElementById('reviewComment').value.trim();
  const photoInput = document.getElementById('reviewPhoto');
  const statusMsg = document.getElementById('reviewStatusMsg');
  const productName = document.getElementById('detailName').textContent;
  const lang = sessionStorage.getItem('language') || 'en';
  const t = translations[lang];

  if (!name || !phone || !comment || selectedRating === 0) {
    statusMsg.textContent = t.review_fill_all;
    statusMsg.style.color = '#ff4444';
    return;
  }

  const submitBtn = document.getElementById('reviewSubmitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = t.review_sending;

  let photoBase64 = '', photoMimeType = '';
  if (photoInput.files && photoInput.files[0]) {
    const file = photoInput.files[0];
    if (file.size > 5 * 1024 * 1024) {
      statusMsg.textContent = t.review_photo_too_large;
      statusMsg.style.color = '#ff4444';
      submitBtn.disabled = false;
      submitBtn.textContent = t.review_submit;
      return;
    }
    photoMimeType = file.type;
    photoBase64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  const body = new URLSearchParams({
    formType: 'review', product: productName, name, phone,
    rating: String(selectedRating), comment, photoBase64, photoMimeType
  }).toString();

  try {
    const response = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });
    const result = await response.json();
    if (result.success) {
      statusMsg.textContent = t.review_success;
      statusMsg.style.color = '#2ecc71';
      document.getElementById('reviewName').value = '';
      document.getElementById('reviewPhone').value = '';
      document.getElementById('reviewComment').value = '';
      document.getElementById('reviewPhoto').value = '';
      selectedRating = 0;
      document.querySelectorAll('#reviewStars .star').forEach(s => s.classList.remove('star-filled'));
    } else {
      statusMsg.textContent = t.review_not_verified;
      statusMsg.style.color = '#ff4444';
    }
  } catch (err) {
    statusMsg.textContent = t.review_error;
    statusMsg.style.color = '#ff4444';
  }

  submitBtn.disabled = false;
  submitBtn.textContent = t.review_submit;
}

let pendingPrivacyAction = null;
let currentPrivacyMode = null;

function renderPrivacyPopup(mode) {
  currentPrivacyMode = mode;
  const popup = document.getElementById('privacyPopup');
  const textEl = document.getElementById('privacyPopupText');
  const actionsEl = document.getElementById('privacyPopupActions');
  if (!popup || !textEl || !actionsEl) return;

  const lang = sessionStorage.getItem('language') || 'en';
  const t = translations[lang];
  popup.classList.remove('show-close');
  actionsEl.innerHTML = '';

  if (mode === 'initial') {
    textEl.textContent = t.privacy_text;
    const noBtn = document.createElement('button');
    noBtn.className = 'privacy-btn-no';
    noBtn.textContent = t.privacy_no;
    noBtn.addEventListener('click', () => renderPrivacyPopup('warning'));
    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'privacy-btn-accept';
    acceptBtn.textContent = t.privacy_accept;
    acceptBtn.addEventListener('click', acceptPrivacy);
    actionsEl.append(noBtn, acceptBtn);

  } else if (mode === 'warning') {
    textEl.textContent = t.privacy_warning_text;
    const continueBtn = document.createElement('button');
    continueBtn.className = 'privacy-btn-no';
    continueBtn.textContent = t.privacy_continue_without;
    continueBtn.addEventListener('click', declinePrivacy);
    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'privacy-btn-accept';
    acceptBtn.textContent = t.privacy_accept_terms;
    acceptBtn.addEventListener('click', acceptPrivacy);
    actionsEl.append(continueBtn, acceptBtn);

  } else if (mode === 'gate') {
    textEl.textContent = t.privacy_warning_text;
    popup.classList.add('show-close');
    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'privacy-btn-accept';
    acceptBtn.textContent = t.privacy_accept_anyway;
    acceptBtn.addEventListener('click', acceptPrivacy);
    actionsEl.append(acceptBtn);
  }

  popup.classList.add('active');
}

function acceptPrivacy() {
  localStorage.setItem('privacyChoice', 'accepted');
  document.getElementById('privacyPopup')?.classList.remove('active');
  if (typeof pendingPrivacyAction === 'function') {
    const action = pendingPrivacyAction;
    pendingPrivacyAction = null;
    action();
  }
}

function declinePrivacy() {
  localStorage.setItem('privacyChoice', 'declined');
  document.getElementById('privacyPopup')?.classList.remove('active');
  pendingPrivacyAction = null;
}

/* ── LANGUAGE SWITCHER ── */
const languageSwitcher = document.getElementById('languageSwitcher');
if (languageSwitcher) {
  languageSwitcher.addEventListener('change', function () { applyTranslation(this.value); });
  const savedLang = sessionStorage.getItem('language');
  if (savedLang) {
    languageSwitcher.value = savedLang;
    applyTranslation(savedLang);
  }
}

/* ── DARK / LIGHT MODE ── */
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  if (localStorage.getItem('theme') === 'light') { document.body.classList.add('light-mode'); themeToggle.innerHTML = '☀️'; }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) { localStorage.setItem('theme', 'light'); themeToggle.innerHTML = '☀️'; }
    else { localStorage.setItem('theme', 'dark'); themeToggle.innerHTML = '🌙'; }
  });
}

/* ── PRODUCT FILTERS ── */
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(product => {
      product.style.display = (filter === 'all' || product.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

/* ── FLOATING CART SIDEBAR ── */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const el = document.getElementById('cart-count');
  const total = cart.reduce((a, b) => a + b.qty, 0);
  if (el) el.textContent = total;
  updateCartCheckoutLabel();
}

function updateCartCheckoutLabel() {
  const btn = document.querySelector('.cart-checkout-btn');
  if (!btn) return;
  const lang = sessionStorage.getItem('language') || 'en';
  const t = translations[lang];
  if (!t) return;
  const canPayFromCart = typeof payNowFromCart === 'function';
  btn.innerText = (canPayFromCart && cart && cart.length > 0) ? t.pay_now : t.go_shop;
}

function openCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  if (panel) panel.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCartSidebar();
}

function closeCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  if (panel) panel.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderCartSidebar() {
  const container = document.getElementById('cartSidebarItems');
  const totalEl   = document.getElementById('cartTotalPrice');
  if (!container) return;
  const lang = sessionStorage.getItem('language') || 'en';
  const t    = translations[lang];
  if (cart.length === 0) {
    container.innerHTML = `<p class="cart-empty">${t.cart_empty}</p>`;
    if (totalEl) totalEl.textContent = '0 DH';
    return;
  }
  let total = 0;
  container.innerHTML = '';
  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    container.innerHTML += `
      <div class="cart-sidebar-item">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${item.price} DH × ${item.qty} = ${itemTotal} DH</p>
        </div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="changeCartQty(${i}, -1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${i}, 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${i})">✕</button>
      </div>`;
  });
  if (totalEl) totalEl.textContent = total + ' DH';
}

function changeCartQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(); renderCartSidebar();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(); renderCartSidebar();
}

/* ── ORDER FLOW ── */
let currentOrder = { name:'', price:0, desc:'', img:'', qty:1, total:0 };

function openOrder(name, price, desc, img) {
  currentOrder = { name, price, desc, img, qty:1, total:price };
  const m1img = document.getElementById('m1-img');
  const m1name = document.getElementById('m1-name');
  const m1price = document.getElementById('m1-price');
  const m1desc = document.getElementById('m1-desc');
  const m1total = document.getElementById('m1-total');
  const qtyDisp = document.getElementById('qty-display');
  if (m1img)   m1img.src           = img;
  if (m1name)  m1name.textContent  = name;
  if (m1price) m1price.textContent = price + ' DH';
  if (m1desc)  m1desc.textContent  = desc;
  if (m1total) m1total.textContent = price + ' DH';
  if (qtyDisp) qtyDisp.textContent = '1';
  showModal('modal1');
}

function changeQty(delta) {
  currentOrder.qty   = Math.max(1, currentOrder.qty + delta);
  currentOrder.total = currentOrder.price * currentOrder.qty;
  const qtyDisp = document.getElementById('qty-display');
  const m1total = document.getElementById('m1-total');
  if (qtyDisp) qtyDisp.textContent = currentOrder.qty;
  if (m1total) m1total.textContent = currentOrder.total + ' DH';
}

function goToStep2() {
  if (localStorage.getItem('privacyChoice') !== 'accepted') {
    pendingPrivacyAction = () => showModal('modal2');
    renderPrivacyPopup('gate');
    return;
  }
  showModal('modal2');
}
function backToStep1() { showModal('modal1'); }

function getSelectedCity() {
  const citySelect = document.getElementById('cust-city');
  if (!citySelect) return '';
  if (citySelect.value === 'Other') {
    return document.getElementById('cust-city-other')?.value.trim() || '';
  }
  return citySelect.value.trim();
}
const DELIVERY_FEES = {
  'Casablanca': 20,
  'Rabat': 30, 'Mohammédia': 30, 'El Jadida': 30, 'Berrechid': 30,
  'Kénitra': 30, 'Settat': 30, 'Bouskoura': 30,
};
const DEFAULT_DELIVERY_FEE = 45;

function getDeliveryFee(city) {
  if (!city) return 0;
  return DELIVERY_FEES[city] !== undefined ? DELIVERY_FEES[city] : DEFAULT_DELIVERY_FEE;
}

function updateDeliveryFee() {
  const citySelect = document.getElementById('cust-city');
  const feeNote = document.getElementById('deliveryFeeNote');
  if (!citySelect || !feeNote) return;
  const city = citySelect.value;
  if (!city) { feeNote.style.display = 'none'; return; }
  const fee = getDeliveryFee(city);
  const lang = sessionStorage.getItem('language') || 'en';
  const label = translations[lang]?.delivery_fee_label || 'Delivery Fee';
  feeNote.textContent = `🚚 ${label}: ${fee} DH`;
  feeNote.style.display = 'block';
}
function goToStep3() {
  const name    = document.getElementById('cust-name')?.value.trim();
  const city    = getSelectedCity();
  const phone   = document.getElementById('cust-phone')?.value.trim();
  const address = document.getElementById('cust-address')?.value.trim();
  if (!name || !city || !phone || !address) { alert('Please fill in all required fields.'); return; }
  currentOrder.deliveryFee = getDeliveryFee(city);
  showModal('modal3');
}

function backToStep2() { showModal('modal2'); }

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

async function confirmOrder() {
  const honeypot = document.getElementById('cust-website');
  if (honeypot && honeypot.value.trim() !== '') { return; }
  const name    = document.getElementById('cust-name')?.value.trim();
  const city    = getSelectedCity();
  const phone   = document.getElementById('cust-phone')?.value.trim();
  const email   = document.getElementById('cust-email')?.value.trim() || '';
  const address = document.getElementById('cust-address')?.value.trim();
  if (!name || !city || !phone || !address) { alert('Please fill in all required fields.'); return; }
  const deliveryFee = currentOrder.deliveryFee !== undefined ? currentOrder.deliveryFee : getDeliveryFee(city);
  const grandTotal  = currentOrder.total + deliveryFee;
  const confirmBtn = document.querySelector('#modal3 .modal-btn');
  if (confirmBtn) { confirmBtn.textContent = 'Sending...'; confirmBtn.disabled = true; }
  const body = new URLSearchParams({
    product: currentOrder.name, quantity: String(currentOrder.qty),
    total: String(grandTotal), name, phone, email, city, address, payment: 'Cash On Delivery',
    website: honeypot ? honeypot.value.trim() : ''
  }).toString();
  try {
    await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  } catch (err) {
    if (confirmBtn) { confirmBtn.textContent = 'Confirm Order →'; confirmBtn.disabled = false; }
    alert('Connection error. Please try again or contact us on WhatsApp.');
    return;
  }
  const finalSummary = document.getElementById('final-summary');
  if (finalSummary) {
    finalSummary.innerHTML = `
      <p>📦 <span>Product:</span> ${currentOrder.name}</p>
      <p>🔢 <span>Quantity:</span> ${currentOrder.qty}</p>
      <p>💰 <span>Subtotal:</span> ${currentOrder.total} DH</p>
      <p>🚚 <span>Delivery Fee:</span> ${deliveryFee} DH</p>
      <p style="font-weight:700;">💵 <span>Total to Pay:</span> ${grandTotal} DH</p>
      <p>👤 <span>Name:</span> ${escapeHTML(name)}</p>
      <p>📞 <span>Phone:</span> ${escapeHTML(phone)}</p>
      <p>📍 <span>City:</span> ${escapeHTML(city)}</p>
      <p>🏠 <span>Address:</span> ${escapeHTML(address)}</p>
      <p>✅ <span>Payment:</span> Cash On Delivery</p>`;
  }
  showModal('modal4');
  if (confirmBtn) { confirmBtn.textContent = 'Confirm Order →'; confirmBtn.disabled = false; }

  if (currentOrder.fromCart) {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartSidebar();
  }
}

function showModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  ['modal1', 'modal2', 'modal3', 'modal4'].forEach(mid => {
    if (mid !== id) document.getElementById(mid)?.classList.remove('active');
  });
  void el.offsetWidth;
  el.classList.add('active');
  document.body.style.overflow = 'hidden';
  el.scrollIntoView({ block: 'start' });

  const cursorDot = document.getElementById('heroCursorDot');
  if (cursorDot && document.body.lastElementChild !== cursorDot) {
    document.body.appendChild(cursorDot);
  }
}
function hideModal(id) { const el = document.getElementById(id); if (el) el.classList.remove('active'); }
function closeAll() { ['modal1','modal2','modal3','modal4'].forEach(hideModal); document.body.style.overflow = ''; }

/* ── SHOP PAGE — ADD TO CART ── */
function addToCartShop(name, price, btn) {
  const existing = cart.find(p => p.name === name);
  if (existing) { existing.qty++; } else { cart.push({ name, price, qty: 1 }); }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount(); openCart();
  if (btn) {
    const lang = sessionStorage.getItem('language') || 'en';
    btn.textContent = '✓ Added!';
    setTimeout(() => btn.textContent = translations[lang].shop_add_cart, 1500);
  }
}

/* ── SHOW CATEGORY ── */
function showCategory(cat, e) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.category-section').forEach(s => s.classList.remove('active'));
  if (e && e.currentTarget) e.currentTarget.classList.add('active');
  const section = document.getElementById('cat-' + cat);
  if (section) {
    section.classList.add('active');
    setTimeout(() => { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
  }
}

/* ── DOM CONTENT LOADED ── */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('privacyPopup')) {
    const isShopPage = window.location.pathname.toLowerCase().includes('shop.html');
       if (!isShopPage && !localStorage.getItem('privacyChoice') && sessionStorage.getItem('language')) {
      setTimeout(() => renderPrivacyPopup('initial'), 800);
    }
    document.getElementById('privacyPopupClose')?.addEventListener('click', () => {
      document.getElementById('privacyPopup').classList.remove('active');
    });
  }
    const langOverlay = document.getElementById('langSelectOverlay');
  if (langOverlay && !sessionStorage.getItem('language')) {
    langOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  document.querySelectorAll('.lang-select-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      const switcher = document.getElementById('languageSwitcher');
      if (switcher) switcher.value = lang;
      applyTranslation(lang);
      langOverlay.classList.remove('active');
      document.body.style.overflow = '';

      const isShopPage = window.location.pathname.toLowerCase().includes('shop.html');
      if (!isShopPage && !localStorage.getItem('privacyChoice') && document.getElementById('privacyPopup')) {
        setTimeout(() => renderPrivacyPopup('initial'), 500);
      }
    });
  });
  const cartIcon = document.querySelector('.cart-icon');
  if (cartIcon) cartIcon.addEventListener('click', openCart);
  updateCartCount();

   const cityDropdown = document.getElementById('cust-city');
  if (cityDropdown) {
    cityDropdown.addEventListener('change', function () {
      const wrap = document.getElementById('cust-city-other-wrap');
      if (wrap) wrap.style.display = (this.value === 'Other') ? 'flex' : 'none';
      updateDeliveryFee();
    });
  }

  ['modal1','modal2','modal3','modal4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', function(e) { if (e.target === this) closeAll(); });
  });

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => { backToTop.classList.toggle('visible', window.scrollY > 400); });
    backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ── GLOBAL CURSOR ── */
  const existing = document.getElementById('heroCursorDot');
  if (existing) existing.remove();
  const dot = document.createElement('div');
  dot.id = 'heroCursorDot';
  dot.className = 'hero-cursor-dot';
  document.body.appendChild(dot);

  window.addEventListener('scroll', () => { if (document.body.lastElementChild !== dot) document.body.appendChild(dot); }, { passive: true });
  document.addEventListener('click', () => { if (document.body.lastElementChild !== dot) document.body.appendChild(dot); });
  document.addEventListener('mouseover', () => { if (document.body.lastElementChild !== dot) document.body.appendChild(dot); });

  const hero    = document.getElementById('heroSection');
  const overlay = document.getElementById('heroHoverOverlay');
  const ZONE    = 0.30;

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    if (hero && overlay) {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left; const y = e.clientY - rect.top;
      const inHero = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      const nearCenter = inHero && Math.abs(x - rect.width / 2) / rect.width < ZONE && Math.abs(y - rect.height / 2) / rect.height < ZONE;
      overlay.classList.toggle('active', nearCenter);
      dot.classList.toggle('center', nearCenter);
    }
  });

  document.addEventListener('mouseover', e => {
    const target = e.target.closest('a, button, input, select, textarea, .cart-icon, .product-card, .feature-card, .stat-card, .social-card, .brand-item, .cat-tab, .shop-card, .review-card, .fsocial, .cart-qty-btn, .cart-item-remove, .search-suggestion, .back-to-top, .qv-btn, .map-open-btn, .ct-ch, .ct-social, .ct-wa-btn, .ab-val, .ab-brand-chip');
    if (target) dot.classList.add('center');
    else dot.classList.remove('center');
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; });
  document.addEventListener('mousedown', () => { dot.style.transform = 'translate(-50%, -50%) scale(0.7)'; });
  document.addEventListener('mouseup',   () => { dot.style.transform = 'translate(-50%, -50%) scale(1)'; });

  const pt = document.getElementById('pageTransition');
  if (pt) { pt.classList.add('fade-in'); setTimeout(() => pt.classList.remove('fade-in'), 400); }

  const input    = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchDropdown');
  if (input && dropdown) {
    function highlight(text, query) {
      if (!query) return text;
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(regex, '<span class="search-highlight">$1</span>');
    }
    function showSuggestions(query) {
      const lang = sessionStorage.getItem('language') || 'en';
      const t    = translations[lang];
      if (!query || query.length < 1) { dropdown.classList.remove('active'); dropdown.innerHTML = ''; return; }
      const q = query.toLowerCase();
      const nameField = lang === 'fr' ? 'name_fr' : lang === 'ar' ? 'name_ar' : 'name';
      const matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.name_fr || '').toLowerCase().includes(q) ||
        (p.name_ar || '').toLowerCase().includes(q)
      ).slice(0, 6);
      if (matches.length === 0) { dropdown.innerHTML = `<p class="search-no-results">${t.no_results}</p>`; dropdown.classList.add('active'); return; }
      dropdown.innerHTML = matches.map(p => {
        const displayName = p[nameField] || p.name;
        return `
        <a href="shop.html?cat=${p.cat}&prod=${encodeURIComponent(p.name)}" class="search-suggestion">
          <img src="${p.img}" alt="${displayName}" onerror="this.style.display='none'">
          <div class="suggestion-info">
            <p class="suggestion-name">${highlight(displayName, query)}</p>
            <p class="suggestion-price">${p.price} DH</p>
            <p class="suggestion-cat">${t['cat_' + p.cat] || p.cat}</p>
          </div>
        </a>`;
      }).join('');
      dropdown.classList.add('active');
    }
    input.addEventListener('input', () => showSuggestions(input.value.trim()));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { const first = dropdown.querySelector('.search-suggestion'); if (first) first.click(); } });
    document.addEventListener('click', e => { if (!input.contains(e.target) && !dropdown.contains(e.target)) dropdown.classList.remove('active'); });
    dropdown.addEventListener('mousedown', e => e.preventDefault());
  }

  const urlParams = new URLSearchParams(window.location.search);
  const catParam  = urlParams.get('cat');
  if (catParam) {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.category-section').forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById('cat-' + catParam);
    const targetTab     = document.querySelector(`.cat-tab[onclick*="${catParam}"]`);
    if (targetSection) targetSection.classList.add('active');
    if (targetTab)     targetTab.classList.add('active');

    const prodParam = urlParams.get('prod');
    if (prodParam && targetSection) {
      setTimeout(() => {
        const btns = targetSection.querySelectorAll('.btn-cart');
        const targetBtn = Array.from(btns).find(b => b.getAttribute('onclick').includes(`'${prodParam}'`));
        const targetCard = targetBtn ? targetBtn.closest('.shop-card') : null;
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('product-spotlight');
          setTimeout(() => targetCard.classList.remove('product-spotlight'), 2200);
        }
      }, 150);
    }
  }
});

/* ── ADD TO CART (index page) ── */
document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const card      = btn.closest('.product-card');
    const name      = card.querySelector('h3').innerText;
    const priceText = card.querySelector('p') ? card.querySelector('p').innerText : '0';
    const price     = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;
    const existing  = cart.find(p => p.name === name);
    if (existing) { existing.qty++; } else { cart.push({ name, price, qty: 1 }); }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); openCart();
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) { cartIcon.classList.remove('bounce'); void cartIcon.offsetWidth; cartIcon.classList.add('bounce'); cartIcon.addEventListener('animationend', () => cartIcon.classList.remove('bounce'), { once: true }); }
  });
});

/* ── PAGE TRANSITIONS ── */
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('https://wa')) return;
  if (href.startsWith('http') && !href.includes(window.location.hostname)) return;
  if (link.classList.contains('cart-checkout-btn')) return;
  link.addEventListener('click', e => {
    e.preventDefault();
    const pt = document.getElementById('pageTransition');
    if (pt) { pt.classList.add('fade-in'); setTimeout(() => window.location.href = href, 400); }
    else window.location.href = href;
  });
});

/* ── SCROLL REVEAL ── */
const animatedElements = document.querySelectorAll('.feature-card, .product-card, .stat-card, .about-card');
function revealElements() { animatedElements.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('show'); }); }
window.addEventListener('scroll', revealElements);
revealElements();

/* ── SMOOTH BUTTON EFFECT ── */
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', () => button.style.transform = 'translateY(-4px)');
  button.addEventListener('mouseleave', () => button.style.transform = 'translateY(0px)');
});

/* ── PRELOADER ── */
window.addEventListener('load', () => { const loader = document.getElementById('preloader'); if (loader) { loader.style.opacity = '0'; setTimeout(() => loader.style.display = 'none', 500); } });

/* ── PRODUCTS DATA ── */
const PRODUCTS = [
  { name: 'SHtel Power Bank 20000mAh 45W SP-32', name_fr: 'SHtel Batterie Externe 20000mAh 45W SP-32', name_ar: 'SHtel شاحن متنقل 20000mAh 45W SP-32', price: '199', cat: 'powerbanks', img: 'IMAGES/PowerSH20.png' },
  { name: 'SHtel Power Bank 20000mAh 22.5W SP-24', name_fr: 'SHtel Batterie Externe 20000mAh 22.5W SP-24', name_ar: 'SHtel شاحن متنقل 20000mAh 22.5W SP-24', price: '229', cat: 'powerbanks', img: 'IMAGES/SH 22.5W.png' },
  { name: 'SHtel Power Bank 10000mAh 22.5W SP-90', name_fr: 'SHtel Batterie Externe 10000mAh 22.5W SP-90', name_ar: 'SHtel شاحن متنقل 10000mAh 22.5W SP-90', price: '179', cat: 'powerbanks', img: 'IMAGES/SHtel 10000W.png' },
  { name: 'Konfulon Magnetic Wireless Power Bank 10000mAh M22W', name_fr: 'Konfulon Batterie Externe Magnétique Sans Fil 10000mAh M22W', name_ar: 'Konfulon شاحن متنقل مغناطيسي لاسلكي 10000mAh M22W', price: '249', cat: 'powerbanks', img: 'IMAGES/Konfulon wireless 10000mah.png' },
  { name: 'Xiaomi Wireless Power Bank 20000mAh', name_fr: 'Xiaomi Batterie Externe Sans Fil 20000mAh', name_ar: 'Xiaomi شاحن متنقل لاسلكي 20000mAh', price: '229', cat: 'powerbanks', img: 'IMAGES/Xiaomi 20Mah.png' },
  { name: 'Oryx CUBE-10 Wireless Power Bank 10000mAh', name_fr: 'Oryx CUBE-10 Batterie Externe Sans Fil 10000mAh', name_ar: 'Oryx CUBE-10 شاحن متنقل لاسلكي 10000mAh', price: '89', cat: 'powerbanks', img: 'IMAGES/Oryx 10000Mah.png' },
  { name: 'Dinex Portable LED Power Bank 20000mAh X-200', name_fr: 'Dinex Batterie Externe LED Portable 20000mAh X-200', name_ar: 'Dinex شاحن متنقل بإضاءة LED 20000mAh X-200', price: '239', cat: 'powerbanks', img: 'IMAGES/dinex power.png' },
  { name: 'Dinex Mini Power Bank 5000mAh A333', name_fr: 'Dinex Mini Batterie Externe 5000mAh A333', name_ar: 'Dinex شاحن متنقل صغير 5000mAh A333', price: '219', cat: 'powerbanks', img: 'IMAGES/dinex 5000 mini.png' },
  { name: 'Konfulon Outdoor Power Bank 100000mAh A45Q', name_fr: 'Konfulon Batterie Externe Outdoor 100000mAh A45Q', name_ar: 'Konfulon شاحن متنقل خارجي 100000mAh A45Q', price: '699', cat: 'powerbanks', img: 'IMAGES/big power 100000Mah.png' },
  { name: 'Konfulon Power Bank 70000mAh A66Q', name_fr: 'Konfulon Batterie Externe 70000mAh A66Q', name_ar: 'Konfulon شاحن متنقل 70000mAh A66Q', price: '579', cat: 'powerbanks', img: 'IMAGES/Konfulon 70000Mah.png' },
  { name: 'AI Solar Camera 3-in-1 (SPM-T Series)', name_fr: 'Caméra Solaire IA 3-en-1 (Série SPM-T)', name_ar: 'كاميرا شمسية بالذكاء الاصطناعي 3 في 1 (سلسلة SPM-T)', price: '1399', cat: 'cameras', img: 'IMAGES/4g-wifi cam solar.png' },
  { name: 'AOV Smart Solar Camera (4-Lens)', name_fr: 'AOV Caméra Solaire Intelligente (4 Objectifs)', name_ar: 'AOV كاميرا شمسية ذكية (4 عدسات)', price: '1499', cat: 'cameras', img: 'IMAGES/AOV cam.png' },
  { name: 'HD Outdoor & Solar Security Camera', name_fr: 'Caméra de Sécurité Extérieure Solaire HD', name_ar: 'كاميرا مراقبة خارجية شمسية بدقة HD', price: '1299', cat: 'cameras', img: 'IMAGES/Camera solaire tvt 4cam.png' },
  { name: 'Hikvision 3K Color Turret Camera', name_fr: 'Hikvision Caméra Tourelle Couleur 3K', name_ar: 'Hikvision كاميرا Turret ملونة بدقة 3K', price: '199', cat: 'cameras', img: 'IMAGES/hikvision int cam 3k.png' },
  { name: 'Imou Bullet 2E Outdoor Camera', name_fr: 'Imou Caméra Extérieure Bullet 2E', name_ar: 'Imou كاميرا خارجية Bullet 2E', price: '749', cat: 'cameras', img: 'IMAGES/imou etanche bullet.png' },
  { name: 'TP-Link Tapo C212 Pan/Tilt Camera', name_fr: 'TP-Link Tapo C212 Caméra Motorisée (Pan/Tilt)', name_ar: 'TP-Link Tapo C212 كاميرا دوارة', price: '399', cat: 'cameras', img: 'IMAGES/tapo home.png' },
  { name: 'Ezviz H8c Smart Home Camera', name_fr: 'Ezviz H8c Caméra Domestique Intelligente', name_ar: 'Ezviz H8c كاميرا منزلية ذكية', price: '499', cat: 'cameras', img: 'IMAGES/Ezviz etanche.png' },
  { name: 'Hikvision ColorVu Bullet Camera', name_fr: 'Hikvision Caméra Bullet ColorVu', name_ar: 'Hikvision كاميرا Bullet بتقنية ColorVu', price: '269', cat: 'cameras', img: 'IMAGES/Hikvision ClolorVu HD cam.png' },
  { name: 'Hikvision Turbo HD Bullet Camera', name_fr: 'Hikvision Caméra Bullet Turbo HD', name_ar: 'Hikvision كاميرا Bullet بتقنية Turbo HD', price: '229', cat: 'cameras', img: 'IMAGES/hik etanche 4k.png' },
  { name: 'Imou Cruiser Dual 2 (10MP)', name_fr: 'Imou Caméra Cruiser Dual 2 (10MP)', name_ar: 'Imou كاميرا Cruiser Dual 2 (10MP)', price: '799', cat: 'cameras', img: 'IMAGES/imou 10mp.png' },
  { name: 'Sing-e Dual 8-Inch Party Speaker', name_fr: 'Sing-e Enceinte de Fête Double 8 Pouces', name_ar: 'Sing-e مكبر صوت للحفلات مزدوج 8 إنش', price: '1299', cat: 'speakers', img: 'IMAGES/speakersing1mic.png' },
  { name: 'Sing-e 50W HiFi Speaker ZQS8239', name_fr: 'Sing-e Enceinte HiFi 50W ZQS8239', name_ar: 'Sing-e مكبر صوت HiFi بقوة 50W ZQS8239', price: '899', cat: 'speakers', img: 'IMAGES/speakerzqs50Wpng.png' },
  { name: 'Sing-e Dual 10-Inch Tower Speaker', name_fr: 'Sing-e Enceinte Tour Double 10 Pouces', name_ar: 'Sing-e مكبر صوت برجي مزدوج 10 إنش', price: '1399', cat: 'speakers', img: 'IMAGES/SPEAKERMEUBLEZQS.png' },
  { name: 'Avcrowns 15-Inch Trolley Speaker CH-8615', name_fr: 'Avcrowns Enceinte sur Chariot 15 Pouces CH-8615', name_ar: 'Avcrowns مكبر صوت بعجلات 15 إنش CH-8615', price: '2499', cat: 'speakers', img: 'IMAGES/avcrownsspeaker.png' },
  { name: 'NNS RGB Retro Radio NS-7069BT', name_fr: 'NNS Radio Rétro RGB NS-7069BT', name_ar: 'NNS راديو كلاسيكي بإضاءة RGB طراز NS-7069BT', price: '229', cat: 'speakers', img: 'IMAGES/radioLED.jpeg' },
  { name: 'NNS Ribbed Copper Radio & Clock NS-7211BT', name_fr: 'NNS Radio & Horloge Cuivrée Striée NS-7211BT', name_ar: 'NNS راديو وساعة نحاسية مخططة طراز NS-7211BT', price: '229', cat: 'speakers', img: 'IMAGES/RADIOclassic1.png' },
  { name: 'NNS Compact Copper Radio NS-6655BT', name_fr: 'NNS Radio Cuivrée Compacte NS-6655BT', name_ar: 'NNS راديو نحاسي مضغوط طراز NS-6655BT', price: '249', cat: 'speakers', img: 'IMAGES/Radioclassic2.png' },
  { name: 'NNS Wood Radio & Clock NS-7116BT', name_fr: 'NNS Radio & Horloge en Bois NS-7116BT', name_ar: 'NNS راديو وساعة خشبية طراز NS-7116BT', price: '249', cat: 'speakers', img: 'IMAGES/radiomontre.jpeg' },
  { name: 'Avcrowns 12-Inch Karaoke Speaker CH-126', name_fr: 'Avcrowns Enceinte Karaoké 12 Pouces CH-126', name_ar: 'Avcrowns مكبر صوت كاريوكي 12 إنش CH-126', price: '1799', cat: 'speakers', img: 'IMAGES/CH126.png' },
  { name: 'Meier Retro Gramophone Speaker', name_fr: 'Meier Enceinte Style Gramophone Rétro', name_ar: 'Meier مكبر صوت بتصميم غرامافون كلاسيكي', price: '279', cat: 'speakers', img: 'IMAGES/Radioclssic2.jpeg' },
  { name: 'Smartbarry C90 MAX (4G Ultra Watch)', name_fr: 'Smartbarry C90 MAX (Montre Ultra 4G)', name_ar: 'Smartbarry C90 MAX (ساعة ألترا بشبكة 4G)', price: '849', cat: 'watches', img: 'IMAGES/c90 centre.png' },
  { name: 'Riversong Motive 10 GT', name_fr: 'Riversong Motive 10 GT', name_ar: 'Riversong Motive 10 GT', price: '349', cat: 'watches', img: 'IMAGES/motive10gt.png' },
  { name: 'Smartbarry C006pro Kids Watch', name_fr: 'Smartbarry C006pro Montre Enfant', name_ar: 'Smartbarry C006pro ساعة أطفال', price: '199', cat: 'watches', img: 'IMAGES/kidswatchsmart.png' },
  { name: 'Black Shark A3', name_fr: 'Black Shark A3', name_ar: 'Black Shark A3', price: '599', cat: 'watches', img: 'IMAGES/blacksharkA3.png' },
  { name: 'Kieslect Kr3', name_fr: 'Kieslect Kr3', name_ar: 'Kieslect Kr3', price: '459', cat: 'watches', img: 'IMAGES/kr3.png' },
  { name: 'Kieslect Elite2', name_fr: 'Kieslect Elite2', name_ar: 'Kieslect Elite2', price: '479', cat: 'watches', img: 'IMAGES/elite2.png' },
  { name: 'Mibro Lite3 Pro', name_fr: 'Mibro Lite3 Pro', name_ar: 'Mibro Lite3 Pro', price: '899', cat: 'watches', img: 'IMAGES/lite 3pro.png' },
  { name: 'Riversong Motive 6 Pro', name_fr: 'Riversong Motive 6 Pro', name_ar: 'Riversong Motive 6 Pro', price: '499', cat: 'watches', img: 'IMAGES/motive 6 pro.png' },
  { name: 'Kieslect Elfin', name_fr: 'Kieslect Elfin', name_ar: 'Kieslect Elfin', price: '389', cat: 'watches', img: 'IMAGES/ks elfin.png' },
  { name: 'Kieslect Lora 3', name_fr: 'Kieslect Lora 3', name_ar: 'Kieslect Lora 3', price: '649', cat: 'watches', img: 'IMAGES/ks lora3.png' },
  { name: 'Braun Silk-épil 5 SensoSmart Epilator', name_fr: 'Braun Silk-épil 5 SensoSmart Épilateur', name_ar: 'Braun Silk-épil 5 SensoSmart جهاز إزالة الشعر', price: '449', cat: 'beauty', img: 'IMAGES/Braun epil 5.png' },
  { name: 'Sokany Ceramic Hair Straightener SK-993', name_fr: 'Sokany Lisseur Céramique SK-993', name_ar: 'Sokany مكواة فرد شعر سيراميك SK-993', price: '199', cat: 'beauty', img: 'IMAGES/lisseur sokany.png' },
  { name: 'DSP Steam Lustre Styler 10242', name_fr: 'DSP Lisseur Vapeur Lustre 10242', name_ar: 'DSP مكواة بخار لامعة 10242', price: '349', cat: 'beauty', img: 'IMAGES/dsp lisseur.png' },
  { name: 'Enzo Professional One-Step Volumiser PLUS', name_fr: 'Enzo Professional Brosse Volumisante Une Étape PLUS', name_ar: 'Enzo Professional فرشاة تصفيف ومنح حجم بخطوة واحدة PLUS', price: '299', cat: 'beauty', img: 'IMAGES/enzo bross.png' },
  { name: 'Enzo Professional 2-in-1 Magic Brush', name_fr: 'Enzo Professional Brosse Magique 2-en-1', name_ar: 'Enzo Professional فرشاة سحرية 2 في 1', price: '399', cat: 'beauty', img: 'IMAGES/enzo2in1.png' },
  { name: 'BaByliss 19mm Curling Tong', name_fr: 'BaByliss Fer à Boucler 19mm', name_ar: 'BaByliss مكواة تجعيد 19mm', price: '449', cat: 'beauty', img: 'IMAGES/babyliss curler.png' },
  { name: 'Tondeuse barbe Kemei 1677', name_fr: 'Tondeuse Barbe Kemei 1677', name_ar: 'ماكينة حلاقة اللحية Kemei 1677', price: '219', cat: 'grooming', img: 'IMAGES/tondeuse kemei.png' },
  { name: 'Philips One Blade 360', name_fr: 'Philips One Blade 360', name_ar: 'Philips One Blade 360', price: '649', cat: 'grooming', img: 'IMAGES/philis one blade 360 one of 1.png' },
  { name: 'Oraimo Electric Shaver', name_fr: 'Oraimo Rasoir Électrique', name_ar: 'Oraimo ماكينة حلاقة كهربائية', price: '299', cat: 'grooming', img: 'IMAGES/Rasoir Oraimo.png' },
  { name: 'Braun Hair Clipper Set', name_fr: 'Braun Kit Tondeuse Cheveux', name_ar: 'Braun طقم مقص شعر', price: '699', cat: 'grooming', img: 'IMAGES/braun shaver small.png' },
    { name: 'Kemei KM-320B Body Hair Trimmer', name_fr: 'Kemei KM-320B Tondeuse Corps', name_ar: 'Kemei KM-320B ماكينة تشذيب الجسم', price: '199', cat: 'grooming', img: 'IMAGES/kemei intime whitebg.png' },
  { name: 'Kemei KM-8536 Hair Clipper & Trimmer Set', name_fr: 'Kemei KM-8536 Set Tondeuse & Rasoir', name_ar: 'Kemei KM-8536 طقم مقص وماكينة تشذيب', price: '249', cat: 'grooming', img: 'IMAGES/pack kemei 8536.png' },
  { name: 'Kemei KM-2024 Foil Shaver', name_fr: 'Kemei KM-2024 Rasoir à Grille', name_ar: 'Kemei KM-2024 ماكينة حلاقة بشبكة', price: '249', cat: 'grooming', img: 'IMAGES/kemei shaving.png' },
  { name: 'Philips OneBlade Intimate Trimmer', name_fr: 'Philips OneBlade Tondeuse Intime', name_ar: 'Philips OneBlade ماكينة تشذيب للمناطق الحساسة', price: '799', cat: 'grooming', img: 'IMAGES/one blade intimate.png' },
  { name: 'Kemei KM-277 3-in-1 Grooming Kit', name_fr: 'Kemei KM-277 Kit de Toilettage 3-en-1', name_ar: 'Kemei KM-277 طقم عناية 3 في 1', price: '249', cat: 'grooming', img: 'IMAGES/kemei 3in1.png' },
  { name: 'Rhythm Quartz Alarm Clock (Gold)', name_fr: 'Rhythm Réveil à Quartz (Doré)', name_ar: 'Rhythm منبه كوارتز (ذهبي)', price: '179', cat: 'wallwatch', img: 'IMAGES/rhythmcra824.png' },
  { name: 'Rhythm Quartz Alarm Clock (Black)', name_fr: 'Rhythm Réveil à Quartz (Noir)', name_ar: 'Rhythm منبه كوارتز (أسود)', price: '199', cat: 'wallwatch', img: 'IMAGES/rythmcra829.png' },
  { name: 'Rhythm Alarm Clock (Blue)', name_fr: 'Rhythm Réveil (Bleu)', name_ar: 'Rhythm منبه (أزرق)', price: '189', cat: 'wallwatch', img: 'IMAGES/rhythmrev.jpeg' },
  { name: 'Silent Scanning Alarm Clock 3567', name_fr: 'Réveil à Balayage Silencieux 3567', name_ar: 'منبه بحركة صامتة 3567', price: '99', cat: 'wallwatch', img: 'IMAGES/alarmnor.jpeg' },
  { name: 'LED Digital Clock GS-5308', name_fr: 'Horloge Numérique LED GS-5308', name_ar: 'ساعة رقمية LED طراز GS-5308', price: '129', cat: 'wallwatch', img: 'IMAGES/reveil electro.jpeg' },
  { name: 'DINEX 50W type C Fast Charger', name_fr: 'DINEX Chargeur Rapide Type C 50W', name_ar: 'DINEX شاحن سريع Type C بقوة 50W', price: '129', cat: 'phones', img: 'IMAGES/chargeur dinex 50w.png' },
  { name: 'Dinex Data Cable 100W 3m', name_fr: 'Dinex Câble de Charge 100W 3m', name_ar: 'Dinex كابل شحن 100W 3m', price: '99', cat: 'phones', img: 'IMAGES/Dinex data 100w.png' },
  { name: 'Dinex 20w Fast Charger lightning', name_fr: 'Dinex Chargeur Rapide Lightning 20W', name_ar: 'Dinex شاحن سريع Lightning بقوة 20W', price: '119', cat: 'phones', img: 'IMAGES/DINEX 20w.png' },
  { name: 'Dinex Car Phone Holder', name_fr: 'Dinex Support Téléphone Voiture', name_ar: 'Dinex حامل هاتف للسيارة', price: '89', cat: 'phones', img: 'IMAGES/dinex phone holder.png' },
  { name: 'SHtel type C CABLE 3.4A', name_fr: 'SHtel Câble Type C 3.4A', name_ar: 'SHtel كابل Type C بقوة 3.4A', price: '79', cat: 'phones', img: 'IMAGES/2m shtel cable.png' },
  { name: 'Dinex Fast Charging Cable 3.0A', name_fr: 'Dinex Câble de Charge Rapide 3.0A', name_ar: 'Dinex كابل شحن سريع 3.0A', price: '79', cat: 'phones', img: 'IMAGES/dinex lightning cable 3A.png' },
  { name: 'Xiaomi Fast charger 120W', name_fr: 'Xiaomi Chargeur Rapide 120W', name_ar: 'Xiaomi شاحن سريع بقوة 120W', price: '199', cat: 'phones', img: 'IMAGES/chargeur xiaomi 120w.png' },
  { name: 'Oraimo lightning charger 20w', name_fr: 'Oraimo Chargeur Lightning 20W', name_ar: 'Oraimo شاحن Lightning بقوة 20W', price: '79', cat: 'phones', img: 'IMAGES/oraimo lightning.png' },
  { name: 'Dinex 4OW type C adapter', name_fr: 'Dinex Adaptateur Type C 4OW', name_ar: 'Dinex محول Type C طاقة 4OW', price: '99', cat: 'phones', img: 'IMAGES/dinex type c adapter.png' },
  { name: 'Plokama tripod and selfie stick', name_fr: 'Plokama Trépied et Perche à Selfie', name_ar: 'Plokama حامل ثلاثي وعصا سيلفي', price: '299', cat: 'phones', img: 'IMAGES/tripod plokama.png' },
  { name: 'D-Plus D96 AndroidTV Box', name_fr: 'D-Plus D96 Boîtier AndroidTV', name_ar: 'D-Plus D96 جهاز أندرويد تي في', price: '449', cat: 'android', img: 'IMAGES/D96pluspro.png' },
  { name: 'Xiaomi Smart TV Stick 4K', name_fr: 'Xiaomi Clé TV Intelligente 4K', name_ar: 'Xiaomi عصا تلفاز ذكية 4K', price: '249', cat: 'android', img: 'IMAGES/xiaomi stick.png' },
  { name: 'Xiaomi TV Box S (3rd Gen)', name_fr: 'Xiaomi Boîtier TV S (3ème Génération)', name_ar: 'Xiaomi جهاز تلفاز TV S (الجيل الثالث)', price: '299', cat: 'android', img: 'IMAGES/xiaomi tv box s.png' },
  { name: 'Senic H96 Max Android Box', name_fr: 'Senic H96 Max Boîtier Android', name_ar: 'Senic H96 Max جهاز أندرويد', price: '349', cat: 'android', img: 'IMAGES/Senic H96MAX.png' },
  { name: 'Vectron VBox Alpha', name_fr: 'Vectron VBox Alpha', name_ar: 'Vectron VBox Alpha', price: '399', cat: 'android', img: 'IMAGES/vectron box.png' },
  { name: 'Senic X98Q Android Box', name_fr: 'Senic X98Q Boîtier Android', name_ar: 'Senic X98Q جهاز أندرويد', price: '379', cat: 'android', img: 'IMAGES/SenicX98.png' },
  { name: 'Tanix A3 Android Box', name_fr: 'Tanix A3 Boîtier Android', name_ar: 'Tanix A3 جهاز أندرويد', price: '349', cat: 'android', img: 'IMAGES/Tanix senic.png' },
  { name: 'Echolink S400B Android Box', name_fr: 'Echolink S400B Boîtier Android', name_ar: 'Echolink S400B جهاز أندرويد', price: '299', cat: 'android', img: 'IMAGES/Echolink.png' },
  { name: 'Texas Instruments TI-Nspire CX II-T CAS', name_fr: 'Texas Instruments TI-Nspire CX II-T CAS', name_ar: 'Texas Instruments TI-Nspire CX II-T CAS', price: '1499', cat: 'calculators', img: 'IMAGES/TI-Nspire CX II-T CAS.png' },
  { name: 'NumWorks Graphing Calculator', name_fr: 'NumWorks Calculatrice Graphique', name_ar: 'NumWorks آلة حاسبة بيانية', price: '1999', cat: 'calculators', img: 'IMAGES/numworks.png' },
  { name: 'Casio Graph Math+ CLASSW40', name_fr: 'Casio Graph Math+ CLASSW40', name_ar: 'Casio Graph Math+ CLASSW40', price: '999', cat: 'calculators', img: 'IMAGES/Casiograph1.png' },
  { name: 'Casio fx-991ES PLUS (2nd Edition)', name_fr: 'Casio fx-991ES PLUS (2ème Édition)', name_ar: 'Casio fx-991ES PLUS (الإصدار الثاني)', price: '299', cat: 'calculators', img: 'IMAGES/casio91.png' },
  { name: 'Deli D991ES PLUS Scientific Calculator', name_fr: 'Deli D991ES PLUS Calculatrice Scientifique', name_ar: 'Deli D991ES PLUS آلة حاسبة علمية', price: '199', cat: 'calculators', img: 'IMAGES/deli91.png' },
  { name: 'Casio fx-82ES PLUS (2nd Edition)', name_fr: 'Casio fx-82ES PLUS (2ème Édition)', name_ar: 'Casio fx-82ES PLUS (الإصدار الثاني)', price: '249', cat: 'calculators', img: 'IMAGES/casio82.png' },
  { name: 'Casio fx-92 Collège ClassWiz', name_fr: 'Casio fx-92 Collège ClassWiz', name_ar: 'Casio fx-92 Collège ClassWiz', price: '299', cat: 'calculators', img: 'IMAGES/fx92college.png' },
  { name: '360° Sports Armband', name_fr: 'Brassard de Sport 360°', name_ar: 'حزام رياضي للذراع 360°', price: '179', cat: 'gadgets', img: 'IMAGES/sportarmband.png' },
  { name: 'Aerbes 400W Solar LED Flood Light', name_fr: 'Aerbes Projecteur LED Solaire 400W', name_ar: 'Aerbes كشاف LED شمسي بقوة 400W', price: '399', cat: 'gadgets', img: 'IMAGES/LED solar projector.png' },
  { name: 'Electronic Arm Blood Pressure Monitor', name_fr: 'Tensiomètre Électronique de Bras', name_ar: 'جهاز قياس ضغط الدم الإلكتروني من الذراع', price: '279', cat: 'gadgets', img: 'IMAGES/appareil tension1png.png' },
  { name: 'LED Flashlight Set (2-Pack)', name_fr: 'Lot de Lampes Torches LED (2 Pièces)', name_ar: 'طقم مصابيح LED يدوية (قطعتان)', price: '249', cat: 'gadgets', img: 'IMAGES/flashlightpng.png' },
  { name: 'AI Tracking Gimbal Stabilizer Q625', name_fr: 'Stabilisateur Gimbal à Suivi IA Q625', name_ar: 'مثبت جيمبال بتتبع الذكاء الاصطناعي Q625', price: '199', cat: 'gadgets', img: 'IMAGES/phone stand.png' },
  { name: 'TL16 Clip-On Phone Cooling Fan', name_fr: 'TL16 Ventilateur de Refroidissement à Clipser', name_ar: 'TL16 مروحة تبريد بمشبك للهاتف', price: '149', cat: 'gadgets', img: 'IMAGES/minimobilefan.png' },
  { name: 'DuraM RGB Light-Up Bluetooth Speaker', name_fr: 'DuraM Enceinte Bluetooth Lumineuse RGB', name_ar: 'DuraM مكبر صوت بلوتوث مضيء RGB', price: '249', cat: 'gadgets', img: 'IMAGES/RGBlightup.png' },
  { name: 'Celet Smart Fitness Bracelet', name_fr: 'Celet Bracelet Connecté Fitness', name_ar: 'Celet سوار لياقة ذكي', price: '349', cat: 'gadgets', img: 'IMAGES/WhatsApp Image 2026-08-21 at 00.05.00.jpeg' },
  { name: 'SUITU Handheld Vacuum Cleaner', name_fr: 'SUITU Aspirateur à Main', name_ar: 'SUITU مكنسة كهربائية يدوية', price: '199', cat: 'gadgets', img: 'IMAGES/vaccumcleaner.jpeg' },
  { name: 'Intelli System Wrist Blood Pressure Monitor', name_fr: 'Intelli System Tensiomètre de Poignet', name_ar: 'Intelli System جهاز قياس ضغط الدم من المعصم', price: '249', cat: 'gadgets', img: 'IMAGES/tension2.jpeg' },
];

const CAT_LABELS = {
  powerbanks: 'Power Banks',
  cameras: 'Security Cameras',
  speakers: 'Speakers & Radios',
  watches: 'Smart Watches',
  beauty: 'Beauty & Care',
  grooming: 'Men\'s Grooming',
  wallwatch: 'Clocks & Alarms',
  phones: 'Phone Accessories',
  android: 'Android Boxes',
  calculators: 'Calculators',
  gadgets: 'Electronic Gadgets',
};

/* ── ANIMATED COUNTER ── */
function animateCounter(el, target, duration = 1800) {
  const isK = target >= 1000; let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    if (isK) { el.textContent = (start / 1000).toFixed(start >= target ? 0 : 1) + 'K+'; }
    else { el.textContent = Math.floor(start) + '+'; }
  }, 16);
}

function initCounters() {
  const counters = [
    { selector: '.stat-glass:nth-child(1) .stat-value', target: 40 },
    { selector: '.stat-glass:nth-child(2) .stat-value', target: 200 },
    { selector: '.stat-glass:nth-child(3) .stat-value', target: 50000 },
  ];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(({ selector, target }) => {
          const el = document.querySelector(selector);
          if (el && !el.dataset.counted) { el.dataset.counted = 'true'; animateCounter(el, target); }
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const statsRow = document.querySelector('.stats-row');
  if (statsRow) observer.observe(statsRow);
}

document.addEventListener('DOMContentLoaded', initCounters);