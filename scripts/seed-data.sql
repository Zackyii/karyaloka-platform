-- Insert sample profiles (admin user)
INSERT INTO public.profiles (id, email, full_name, role, bio) VALUES
('00000000-0000-0000-0000-000000000001', 'admin@karyaloka.com', 'Admin KaryaLoka', 'admin', 'Administrator KaryaLoka'),
('00000000-0000-0000-0000-000000000002', 'artist1@example.com', 'Seniman Digital', 'artist', 'Seniman digital yang berpengalaman dalam ilustrasi fantasi'),
('00000000-0000-0000-0000-000000000003', 'collector1@example.com', 'Kolektor Seni', 'collector', 'Pecinta seni digital dan kolektor karya seni');

-- Insert sample artworks
INSERT INTO public.artworks (title, description, image_url, price, category, tags, artist_id, status, views, likes) VALUES
('Digital Fantasy Epic', 'Karya seni digital yang menggambarkan dunia fantasi yang epik dengan detail yang menakjubkan.', '/placeholder.svg?height=400&width=600', 1200000, 'Digital Art', ARRAY['fantasy', 'digital', 'epic'], '00000000-0000-0000-0000-000000000002', 'published', 2500, 456),
('Abstract Modern', 'Lukisan abstrak modern dengan perpaduan warna yang harmonis dan komposisi yang dinamis.', '/placeholder.svg?height=400&width=600', 850000, 'Abstract', ARRAY['abstract', 'modern', 'colorful'], '00000000-0000-0000-0000-000000000002', 'published', 1800, 324),
('Character Design Anime', 'Desain karakter anime dengan style yang unik dan detail yang memukau.', '/placeholder.svg?height=400&width=600', 650000, 'Character Design', ARRAY['anime', 'character', 'design'], '00000000-0000-0000-0000-000000000002', 'published', 3200, 678);

-- Insert sample articles
INSERT INTO public.articles (title, content, excerpt, featured_image, author_id, status, views) VALUES
('Tips Memulai Karir sebagai Digital Artist', 'Artikel lengkap tentang bagaimana memulai karir sebagai digital artist...', 'Panduan lengkap untuk memulai karir sebagai digital artist di era modern.', '/placeholder.svg?height=300&width=500', '00000000-0000-0000-0000-000000000002', 'published', 1500),
('Tren Seni Digital 2024', 'Eksplorasi tren terbaru dalam dunia seni digital tahun 2024...', 'Mengenal tren-tren terbaru yang akan mendominasi dunia seni digital.', '/placeholder.svg?height=300&width=500', '00000000-0000-0000-0000-000000000002', 'published', 2200);
