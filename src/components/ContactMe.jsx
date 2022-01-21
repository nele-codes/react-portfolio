import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <main>
            <section>
                <h1>Look me up on social media:</h1>
                <div>
                    <a href="https://www.linkedin.com/in/nele-taevere-5a436340/" target="_blank"><FaLinkedin /></a>
                    <a href="https://twitter.com/NeleTheCoder" target="_blank"><FaTwitter /></a>
                    <a href="https://github.com/nele-codes" target="_blank"><FaGithub /></a>
                </div>
            </section>
        </main>
    )
}

export default ContactMe;