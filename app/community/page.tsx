'use client';

import React, { useState } from 'react';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Heart, Share2, Tag, TrendingUp, Search, Filter, ThumbsUp, ThumbsDown, Flag, Bookmark } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { posts, Post } from '@/data/posts';

const categories = ["All", "Career Advice", "Interview Prep", "Job Search", "Skill Development"];
const companies = ["All", "Google", "Amazon", "Microsoft", "Apple", "Facebook"];

export default function CommunityPage() {
  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [newComments, setNewComments] = useState<{[key: number]: string}>({});

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New post:", newPost);
    setNewPost('');
    // Here you would typically send the post to your backend
  };

  const handleCommentSubmit = (postId: number) => {
    console.log("New comment for post", postId, ":", newComments[postId]);
    setNewComments(prev => ({...prev, [postId]: ''}));
    // Here you would typically send the comment to your backend
  };

  const toggleComments = (postId: number) => {
    setExpandedComments(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const filteredPosts = posts.filter(post => 
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    (selectedCompany === 'All' || post.company === selectedCompany) &&
    (post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <div className="w-1/4 pr-8">
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            {categories.map(category => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="w-full justify-start mb-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Companies</h2>
            {companies.map(company => (
              <Button 
                key={company}
                variant={selectedCompany === company ? "default" : "ghost"}
                className="w-full justify-start mb-2"
                onClick={() => setSelectedCompany(company)}
              >
                {company}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-8">Community</h1>
          
          {/* Search Bar */}
          <div className="mb-8 flex">
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
            <Button>
              <Search className="mr-2" />
              Search
            </Button>
          </div>

          {/* New Post Form */}
          <form onSubmit={handlePostSubmit} className="mb-8 bg-white p-4 rounded-lg shadow">
            <Textarea
              placeholder="Share your thoughts, ask for advice..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-4"
            />
            <Button type="submit">Post</Button>
          </form>

          {/* Popular Posts */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2" /> Popular Posts
            </h2>
            {/* Add popular posts here */}
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-semibold">{post.author}</span>
                    <p className="text-sm text-gray-500">{post.category} | {post.company}</p>
                    <p className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                <div className="flex flex-wrap mb-4">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="mr-2 mb-2">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between text-gray-500">
                  <Button variant="ghost" size="sm">
                    <Heart className="mr-2 h-4 w-4" /> {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => toggleComments(post.id)}>
                    <MessageCircle className="mr-2 h-4 w-4" /> {post.comments.length}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" /> {post.shares}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="mr-2 h-4 w-4" /> Save
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="mr-2 h-4 w-4" /> Report
                  </Button>
                </div>
                {/* Comment section */}
                {expandedComments.includes(post.id) && (
                  <div className="mt-4 pt-4 border-t">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="mb-2 p-2 bg-gray-50 rounded">
                        <p className="font-semibold">{comment.author}</p>
                        <p>{comment.content}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="mr-1 h-3 w-3" /> {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="mr-1 h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">Reply</Button>
                        </div>
                      </div>
                    ))}
                    <form onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(post.id); }} className="mt-2">
                      <Input
                        placeholder="Write a comment..."
                        value={newComments[post.id] || ''}
                        onChange={(e) => setNewComments(prev => ({...prev, [post.id]: e.target.value}))}
                        className="mb-2"
                      />
                      <Button type="submit" size="sm">Post Comment</Button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
