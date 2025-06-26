-- Create storage bucket for artwork images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('artworks', 'artworks', true);

-- Create storage bucket for profile avatars
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true);

-- Create storage bucket for article images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('articles', 'articles', true);

-- Storage policies for artworks bucket
CREATE POLICY "Anyone can view artwork images" ON storage.objects
    FOR SELECT USING (bucket_id = 'artworks');

CREATE POLICY "Authenticated users can upload artwork images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'artworks' 
        AND auth.role() = 'authenticated'
    );

CREATE POLICY "Users can update their own artwork images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'artworks' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Users can delete their own artwork images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'artworks' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

-- Storage policies for avatars bucket
CREATE POLICY "Anyone can view avatar images" ON storage.objects
    FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'avatars' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Users can update their own avatar" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'avatars' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Users can delete their own avatar" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'avatars' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

-- Storage policies for articles bucket
CREATE POLICY "Anyone can view article images" ON storage.objects
    FOR SELECT USING (bucket_id = 'articles');

CREATE POLICY "Authenticated users can upload article images" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'articles' 
        AND auth.role() = 'authenticated'
    );

CREATE POLICY "Users can update their own article images" ON storage.objects
    FOR UPDATE USING (
        bucket_id = 'articles' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );

CREATE POLICY "Users can delete their own article images" ON storage.objects
    FOR DELETE USING (
        bucket_id = 'articles' 
        AND auth.uid()::text = (storage.foldername(name))[1]
    );
