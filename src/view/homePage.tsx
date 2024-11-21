"use client";

import { Button, Typography, Card, Layout, Image } from "antd";
import {
  EditOutlined,
  RocketOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout className="min-h-screen">
      <Content>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <Title className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Generate Your Learning Roadmap
            </Title>
            <Paragraph className="text-xl md:text-2xl mb-8 text-white">
              Plan your learning journey with our AI-powered roadmap generator
            </Paragraph>
            <Button
              type="primary"
              size="large"
              className="bg-white text-blue-600 px-8 py-3 h-auto rounded-full text-lg font-semibold hover:bg-blue-100 hover:text-blue-700 border-none"
            >
              <Link to="/Quiz">Get Started</Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Title
              level={2}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              How Generate Roadmap Works
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Input Your Goals"
                description="Tell us what you want to learn and your current skill level."
                icon={<EditOutlined className="text-4xl mb-4 text-blue-600" />}
              />
              <FeatureCard
                title="AI Analysis"
                description="Our AI analyzes your input and creates a personalized learning path."
                icon={
                  <RocketOutlined className="text-4xl mb-4 text-blue-600" />
                }
              />
              <FeatureCard
                title="Get Your Roadmap"
                description="Receive a detailed, step-by-step roadmap to achieve your learning goals."
                icon={
                  <CompassOutlined className="text-4xl mb-4 text-blue-600" />
                }
              />
            </div>
          </div>
        </section>

        {/* Image Showcase */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <Title
              level={2}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Visualize Your Learning Journey
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Sample roadmap visualization"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="User dashboard example"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Title level={2} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </Title>
            <Paragraph className="text-xl mb-8">
              Create your personalized roadmap now and take the first step
              towards mastering new skills.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 text-white px-8 py-3 h-auto rounded-full text-lg font-semibold hover:bg-blue-700 border-none"
            >
              <Link to="/Quiz">Generate Your Roadmap</Link>
            </Button>
          </div>
        </section>
      </Content>

      <Footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Paragraph className="m-0">
            &copy; 2023 Generate Roadmap. All rights reserved.
          </Paragraph>
        </div>
      </Footer>
    </Layout>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md text-center h-full">
      <div className="text-center">{icon}</div>
      <Title level={3} className="text-xl font-semibold mb-2">
        {title}
      </Title>
      <Paragraph className="text-gray-600">{description}</Paragraph>
    </Card>
  );
}
