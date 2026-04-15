import { Link } from "react-router-dom";
import { FileCheck, Monitor, BookOpen, Shield, GraduationCap, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  { icon: FileCheck, title: "OMR Software", desc: "State-of-the-art OMR reader for 100% accurate data capture from plain paper sheets at 300–500 sheets/min.", path: "/omr" },
  { icon: Monitor, title: "On-Screen Marking", desc: "Secure digital evaluation for both objective and subjective answer sheets with identity masking.", path: "/osm" },
  { icon: BookOpen, title: "Question Paper Management", desc: "Secure lifecycle management of question papers with multi-level approval and encryption.", path: "/qtb" },
  { icon: Shield, title: "AI Proctoring", desc: "AI-powered exam integrity with facial recognition, eye tracking, and automated incident flagging.", path: "/ai-proctoring" },
  { icon: GraduationCap, title: "Computer Based Testing", desc: "Comprehensive center-based examination solution with secure browser lockdown.", path: "/cbt" },
  { icon: Layers, title: "Learning Management System", desc: "Flexible LMS for schools, universities, coaching institutes with assessment & analytics.", path: "/lms" },
];

const Products = () => (
  <div>
    <section className="section-padding">
      <div className="container-eval">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <span className="badge-eval">Products</span>
          <h1>Our Product Suite</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end solutions for examination, evaluation, and learning management.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div key={p.path} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={p.path} className="eval-card block group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <p.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
